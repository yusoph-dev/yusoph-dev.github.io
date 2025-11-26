# Auto-Grader Project Defense Presentation Script
**Duration: 10 minutes**  
**Date: November 26, 2025**

---

## 🎯 OPENING (30 seconds)

**Script:**
> "Good day! Today I'll present the implementation of the Auto-Grader system — a web-based solution for teachers to efficiently grade tests and generate report cards. Instead of explaining what it does, I'll focus on how it's built, the architecture decisions, and the challenges overcome during development."

---

## 📐 PART 1: ARCHITECTURE OVERVIEW (2 minutes)

### 1.1 High-Level Architecture

**Script:**
> "The project follows a **service-oriented architecture** with clear separation of concerns, implementing SOLID principles for maintainability and flexibility."

**Key Points:**
- **Flask Web Framework** (Python 3.x)
- **SQLite Database** for persistence
- **Service Layer Pattern** for business logic
- **RESTful API** design

**Visual Aid Reference:**

**Diagram 1: Layered Architecture**
```
┌────────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  index.html  │  │  style.css   │  │   main.js    │        │
│  │  (Template)  │  │  (Styling)   │  │  (Client JS) │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└────────────────────────────────────────────────────────────────┘
                              ▼
┌────────────────────────────────────────────────────────────────┐
│                       API LAYER (Flask)                        │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  app.py - HTTP Routes & Controllers                      │ │
│  │  • /teacher/login                                        │ │
│  │  • /upload/all                                           │ │
│  │  • /report/teacher/<id>                                  │ │
│  │  • /get/results/<test_id>                                │ │
│  └──────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────┘
                              ▼
┌────────────────────────────────────────────────────────────────┐
│                     BUSINESS LOGIC LAYER                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Teacher    │  │     Test     │  │    Report    │        │
│  │   Service    │  │   Service    │  │   Service    │        │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘        │
│         │                  │                  │                 │
│         └──────────────────┴──────────────────┘                │
│                            ▼                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Database   │  │     File     │  │   Grading    │        │
│  │   Service    │  │   Service    │  │   Service    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
└────────────────────────────────────────────────────────────────┘
                              ▼
┌────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                │
│  ┌─────────────────┐           ┌─────────────────┐            │
│  │  SQLite DB      │           │  File System    │            │
│  │  • teachers     │           │  • uploads/     │            │
│  │  • tests        │           │  • answer keys  │            │
│  │  • answer_keys  │           │  • answers/     │            │
│  │  • student_ans  │           │  • reports/     │            │
│  │  • results      │           │                 │            │
│  └─────────────────┘           └─────────────────┘            │
└────────────────────────────────────────────────────────────────┘
```

**Diagram 2: Service Dependencies (Dependency Injection)**
```
┌─────────────────────────────────────────────────────────────┐
│                         app.py                              │
│                    (Main Application)                       │
└─────┬───────────────────────────────────────────────────────┘
      │ Initializes & Injects:
      ▼
┌─────────────────────────────────────────────────────────────┐
│              DatabaseService(db_path)                       │
│              FileService(upload_folder)                     │
└─────┬───────────────────────────────────────────────────────┘
      │ Injected into:
      ▼
┌─────────────────┐    ┌─────────────────┐    ┌──────────────┐
│ TeacherService  │    │  TestService    │    │ReportService │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │┌────────────┐│
│ │ db_service  │ │    │ │ db_service  │ │    ││ db_service ││
│ │ file_service│ │    │ │ file_service│ │    │└────────────┘│
│ └─────────────┘ │    │ └─────────────┘ │    └──────────────┘
└─────────────────┘    └────────┬────────┘
                                 │ Uses:
                                 ▼
                       ┌──────────────────┐
                       │  GradingService  │
                       │  (Static Methods)│
                       └──────────────────┘
```

**File Reference:** `app/app.py` (lines 1-120)

---

### 1.2 Project Structure

**Script:**
> "Let me walk through the modular structure. The project is divided into distinct layers, each with a single responsibility."

**Directory Tree:**
```
auto-grader/
├── app/
│   ├── app.py                   # Flask routes (API endpoints)
│   ├── migrations/
│   │   └── init_db.py           # Database schema initialization
│   ├── services/                # Business logic layer
│   │   ├── database_service.py  # Database operations
│   │   ├── file_service.py      # File system operations
│   │   ├── grading_service.py   # Grading algorithms
│   │   ├── teacher_service.py   # Teacher business logic
│   │   ├── test_service.py      # Test processing logic
│   │   └── report_service.py    # Detailed reporting logic
│   ├── templates/
│   │   └── index.html           # Single-page application
│   └── static/
│   |   ├── css/style.css        # All styling
│   |   └── js/main.js           # Client-side logic
|   ├── database/
│   |   └── auto_grader.db           # SQLite database
│   └── uploads/                     # Teacher-specific file storage
│       └── [teacher_name]/
│           ├── answer keys/
│           ├── answers/
│           │   └── [test_no]/
│           └── out/reports/
│               ├── cards/
│               └── tests/[test_no]/
```

**File References:**
- Root structure: `/Applications/XAMPP/xamppfiles/htdocs/projects/auto-grader/`

---

## 🔧 PART 2: DETAILED IMPLEMENTATION (5 minutes)

### 2.1 Database Layer

**Script:**
> "The foundation is a **relational database** with 5 tables designed to maintain data integrity through foreign key relationships."

**Database Schema (Entity Relationship Diagram):**
```
┌─────────────────────────────────────────────────────────────────┐
│                     DATABASE SCHEMA (ERD)                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐
│      teachers        │
├──────────────────────┤
│ PK  id              │───┐
│     name (UNIQUE)    │   │
│     date_created     │   │
│     date_logged_in   │   │
└──────────────────────┘   │
                           │ 1:N
                           │
                           │
        ┌──────────────────┴───────────────────────┐
        │                                           │
        │                                           │
        ▼                                           │
┌──────────────────────┐                           │
│        tests         │                           │
├──────────────────────┤                           │
│ PK  id              │───┐                        │
│     test_no          │   │                        │
│ FK  teacher_id      │◄──┘                        │
│     date_created     │                            │
└──────────────────────┘                            │
         │ 1:N                                      │
         │                                          │
         ├──────────────────────┬───────────────────┤
         │                      │                   │
         ▼                      ▼                   ▼
┌──────────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│    answer_keys       │ │ student_answers │ │     results     │
├──────────────────────┤ ├─────────────────┤ ├─────────────────┤
│ PK  id              │ │ PK  id         │ │ PK  id         │
│ FK  test_id         │ │ FK  test_id    │ │ FK  test_id    │
│     test_no          │ │     test_no     │ │     test_no     │
│     item_no          │ │     student_name│ │     student_name│
│     file_name        │ │     item_no     │ │     total_items │
│     answer           │ │     answer      │ │     total_correct│
│ FK  teacher_id      │ │     is_correct  │ │ FK  teacher_id │
└──────────────────────┘ │ FK  teacher_id │ └─────────────────┘
                         └─────────────────┘

RELATIONSHIPS:
• teachers 1───N tests
• tests    1───N answer_keys
• tests    1───N student_answers
• tests    1───N results

FOREIGN KEY CONSTRAINTS:
All tables reference teacher_id for data isolation
All data tables reference test_id for data integrity
```

**File Reference:** `app/migrations/init_db.py` (lines 17-89)

**Key Code Example:**
```python
# app/migrations/init_db.py, lines 23-31
cursor.execute('''
    CREATE TABLE IF NOT EXISTS teachers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        date_created TEXT NOT NULL,
        date_logged_in TEXT NOT NULL
    )
''')
```

**Script:**
> "The `init_db()` function creates all tables with proper foreign keys, ensuring referential integrity. This can run standalone or be imported as a module."

---

### 2.2 Service Layer — Separation of Concerns

**Script:**
> "The service layer implements the **Single Responsibility Principle**. Each service class handles one domain of logic."

#### 2.2.1 DatabaseService

**File Reference:** `app/services/database_service.py` (lines 1-226)

**Script:**
> "DatabaseService centralizes all SQL operations. It provides 20+ methods for CRUD operations, preventing SQL from leaking into business logic."

**Key Methods:**
```python
# Lines 10-16: Constructor with dependency injection
class DatabaseService:
    def __init__(self, db_path: str):
        self.db_path = db_path
    
    def get_connection(self):
        return sqlite3.connect(self.db_path)

# Lines 19-27: Example operation
def get_teacher_by_name(self, name: str) -> Optional[Tuple]:
    conn = self.get_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT id, name FROM teachers WHERE name = ?', (name,))
    teacher = cursor.fetchone()
    conn.close()
    return teacher
```

**Pattern:** Dependency Injection (db_path passed via constructor)

---

#### 2.2.2 FileService

**File Reference:** `app/services/file_service.py` (lines 1-75)

**Script:**
> "FileService manages all file system operations — creating directories, saving uploads, reading files, and generating reports."

**Key Methods:**
```python
# Lines 15-34: Directory structure creation
def create_teacher_directories(self, teacher_name: str, test_no: str) -> dict:
    teacher_base_dir = os.path.join(self.upload_folder, teacher_name)
    answer_keys_dir = os.path.join(teacher_base_dir, 'answer keys')
    answers_dir = os.path.join(teacher_base_dir, 'answers', test_no)
    # ... creates complete directory structure
    return {
        'base': teacher_base_dir,
        'answer_keys': answer_keys_dir,
        'answers': answers_dir,
        'cards': cards_dir,
        'tests': tests_dir
    }
```

**Script:**
> "This method creates the entire folder structure specified in the instructions, returning paths as a dictionary for easy access."

---

#### 2.2.3 GradingService

**File Reference:** `app/services/grading_service.py` (lines 1-44)

**Script:**
> "GradingService contains pure grading logic using static methods — no dependencies, making it easily testable."

**Key Method:**
```python
# Lines 9-24: Core grading algorithm
@staticmethod
def grade_answers(student_answers: List[str], answer_key: Dict[int, str]) -> Tuple[int, List]:
    total_correct = 0
    grading_details = []
    
    for item_no, student_answer in enumerate(student_answers, start=1):
        student_answer = student_answer.strip()
        correct_answer = answer_key.get(item_no, '')
        is_correct = 1 if student_answer == correct_answer else 0
        total_correct += is_correct
        grading_details.append((item_no, student_answer, is_correct))
    
    return total_correct, grading_details
```

**Script:**
> "Line-by-line comparison with whitespace handling. The algorithm is simple but robust, handling edge cases like missing answers."

---

#### 2.2.4 TeacherService

**File Reference:** `app/services/teacher_service.py` (lines 1-78)

**Script:**
> "TeacherService orchestrates teacher-related operations, composing DatabaseService and FileService."

**Key Method:**
```python
# Lines 13-32: Login/Registration logic
def login_teacher(self, name: str) -> dict:
    if not name:
        raise ValueError('Name is required')
    
    teacher = self.db_service.get_teacher_by_name(name)
    
    if teacher:
        self.db_service.update_teacher_login(name)
        return {
            'teacher_id': teacher[0],
            'message': f'Welcome back, {name}!'
        }
    else:
        teacher_id = self.db_service.create_teacher(name)
        return {
            'teacher_id': teacher_id,
            'message': f'Welcome, {name}! Your account has been created.'
        }
```

**Pattern:** Dependency Injection (services injected via constructor, lines 9-11)

---

#### 2.2.5 TestService

**File Reference:** `app/services/test_service.py` (lines 1-179)

**Script:**
> "TestService is the most complex — handling file uploads, orchestrating grading, and generating reports."

**Key Method:**
```python
# Lines 14-75: Complete test upload workflow
def process_test_upload(self, answer_key_file, student_files, teacher_id: int) -> dict:
    # 1. Validate teacher
    teacher = self.db_service.get_teacher_by_id(teacher_id)
    
    # 2. Create directory structure
    directories = self.file_service.create_teacher_directories(teacher_name, test_no)
    
    # 3. Process answer key
    answer_key_path = self.file_service.save_answer_key(...)
    answer_key_content = self.file_service.read_file_lines(answer_key_path)
    
    # 4. Create test record
    test_id = self.db_service.create_test(test_no, teacher_id)
    
    # 5. Store answer key in DB
    # 6. Process each student
    # 7. Generate report cards
    
    return {'test_id': test_id, 'message': '...'}
```

**Script:**
> "This method demonstrates composition — coordinating multiple services to complete a complex workflow."

---

#### 2.2.6 ReportService

**File Reference:** `app/services/report_service.py` (lines 1-88)

**Script:**
> "ReportService handles detailed student reports — showing test-by-test breakdowns with answer comparisons."

**Key Method:**
```python
# Lines 12-86: Detailed report generation
def get_student_detailed_report(self, teacher_id: int, student_name: str) -> dict:
    # Fetch all tests for student
    cursor.execute('''SELECT DISTINCT t.id, t.test_no FROM tests t
                      JOIN results r ON t.id = r.test_id
                      WHERE r.teacher_id = ? AND r.student_name = ?''')
    
    # For each test, get answer keys and student answers
    # Build comparison data with ✅/❌ indicators
    
    return {'student_name': student_name, 'tests': detailed_tests}
```

---

### 2.3 API Layer — Flask Routes

**File Reference:** `app/app.py` (lines 1-120)

**Script:**
> "The Flask app delegates all logic to services. Routes only handle HTTP concerns — parsing requests, calling services, and formatting responses."

**Key Routes:**
```python
# Lines 32-42: Teacher login endpoint
@app.route('/teacher/login', methods=['POST'])
def teacher_login():
    data = request.get_json()
    name = data.get('name', '').strip()
    result = teacher_service.login_teacher(name)
    return jsonify(result), 200

# Lines 48-71: Test upload endpoint
@app.route('/upload/all', methods=['POST'])
def upload_all():
    answer_key = request.files.get('answer_key')
    student_files = request.files.getlist('student_files[]')
    teacher_id = request.form.get('teacher_id')
    
    result = test_service.process_test_upload(answer_key, student_files, int(teacher_id))
    return jsonify({'success': True, 'test_id': result['test_id']}), 200
```

**All Endpoints:**
- `GET /` — Main page
- `POST /teacher/login` — Login/register teacher
- `POST /upload/all` — Upload test files
- `DELETE /reset/teacher/<id>` — Reset teacher data
- `GET /report/teacher/<id>` — Get teacher report card summary
- `GET /get/results/<test_id>` — Get test results
- `GET /report/student/<teacher_id>/<student_name>` — Get detailed student report

---

### 2.4 Frontend — Single Page Application

**File Reference:** `app/templates/index.html` (lines 1-482)

**Script:**
> "The frontend is a single-page application with modals for different features. All CSS and JavaScript are externalized."

**Key Files:**
- `app/static/css/style.css` — 600+ lines of styling with animations
- `app/static/js/main.js` — 400+ lines of async API calls and DOM manipulation

**Key JavaScript Pattern:**
```javascript
// app/static/js/main.js, lines 275-310
async function viewStudentDetails(studentName) {
    const response = await fetch(`/report/student/${currentTeacherId}/${encodeURIComponent(studentName)}`);
    const result = await response.json();
    
    // Build detailed comparison table with ✅/❌ indicators
    // Display in modal
    
    document.getElementById('detailedModalOverlay').classList.add('show');
}
```

---

## 🚧 PART 3: CHALLENGES & SOLUTIONS (1.5 minutes)

### Challenge 1: Multiple Teachers on One System

**Original Assumption:** Instructions said "each teacher has their own copy"  
**Reality:** Web app = shared system

**Solution:**
- Added teacher authentication (lines: `app.py:32-42`)
- Teacher-specific directory isolation (`uploads/[teacher_name]/`)
- Database filtering by `teacher_id` in all queries

**Script:**
> "The instructions assumed single-teacher usage, but a web app inherently supports multiple users. I added teacher authentication and data isolation to handle this properly."

---

### Challenge 2: File Management vs Database Storage

**Decision:** Hybrid approach

**Rationale:**
- Store **data** in database (answers, scores) for querying
- Store **reports** as text files per instructions
- Keep **uploaded files** for audit trail

**Script:**
> "I used both database and file system — database for efficient queries, files for meeting the report card specification."

---

### Challenge 3: Maintaining Flexibility

**Requirement:** "Code must be modifiable on the fly"

**Implementation:**
- Service layer allows swapping implementations
- Static methods for pure functions (easy to modify)
- Clear interfaces between layers
- Single Responsibility Principle means changes are localized

**Example:**
> "If grading logic needs to change (partial credit, weighted scores), only `GradingService.grade_answers()` needs modification — no other code touched."

---

### Challenge 4: Edge Cases

**Handled Cases:**
- Empty files (lines: `test_service.py:58-60`)
- Mismatched line counts (uses `enumerate` with answer key as source of truth)
- Special characters (UTF-8 encoding everywhere)
- Multiple tests per student (aggregation in `teacher_service.py:48-69`)

**Script:**
> "The system handles edge cases gracefully — empty files are skipped, mismatched line counts use the answer key length as the source of truth, and special characters are properly encoded."

---

## 🎬 PART 4: LIVE DEMO SCRIPT (1 minute)

**Script:**
> "Let me demonstrate the key features quickly."

### Demo Steps:

1. **Teacher Login** (10 seconds)
   - Click "👤 Teacher"
   - Enter name "Prof. Smith"
   - Show welcome message

2. **Upload Test Files** (15 seconds)
   - Click "📤 Upload Tests"
   - Select `answer keys/test01.txt`
   - Select multiple student answer files from `answers/test01/`
   - Click "Upload & Grade"
   - Show success message with grading completion

3. **View Results** (15 seconds)
   - Click "📊 View Results"
   - Show comparison table with ✅/❌ indicators
   - Highlight correct/incorrect answers side-by-side

4. **Generate Report Card** (15 seconds)
   - Click "🎓 Report Card"
   - Show aggregated student scores
   - Click "View Details" on a student
   - Show test-by-test breakdown modal

5. **Check File System** (5 seconds)
   - Open `uploads/Prof. Smith/out/reports/tests/test01/`
   - Show generated individual test reports
   - Open `uploads/Prof. Smith/out/reports/cards/`
   - Show student report cards

---

## 🎯 CLOSING (30 seconds)

**Script:**
> "In summary: The auto-grader implements a **service-oriented architecture** with strict separation of concerns, making it maintainable and flexible for on-the-fly modifications. The system handles all required features — uploading, grading, test results, and report cards — while exceeding expectations with a web UI, multi-teacher support, and detailed reporting. The modular design means any component can be modified without cascading changes. Thank you — I'm ready for questions and challenges."

---

## 📝 ANTICIPATED DEFENSE QUESTIONS

### Q1: "Why multiple files instead of one as suggested?"

**Answer:**
> "The instructions said 'one file will do' but also emphasized flexibility and maintainability. A 2000+ line monolithic file would be hard to navigate and modify during the defense. The service layer architecture allows me to quickly locate and change specific functionality — for example, if you ask me to modify grading logic, I know exactly to go to `GradingService.grade_answers()` at line 9. This separation actually makes on-the-fly modifications faster."

---

### Q2: "Show me how you'd add partial credit scoring"

**Answer:**
> "I'd modify `GradingService.grade_answers()` in `app/services/grading_service.py` at lines 9-24. Instead of `is_correct = 1 if student_answer == correct_answer else 0`, I'd add a similarity function. For example:"

```python
def grade_with_partial_credit(student_answer, correct_answer):
    if student_answer == correct_answer:
        return 1.0
    elif levenshtein_distance(student_answer, correct_answer) <= 1:
        return 0.5  # 50% credit for close answers
    return 0.0
```

> "Then change line 20 to: `is_correct = grade_with_partial_credit(student_answer, correct_answer)`. No other files need changes — the database already stores decimals, reports already format percentages."

---

### Q3: "What if we want CSV upload instead of text files?"

**Answer:**
> "I'd modify `FileService.read_file_lines()` at line 46 in `app/services/file_service.py` to detect file type and parse accordingly:"

```python
def read_file_lines(self, file_path: str) -> List[str]:
    if file_path.endswith('.csv'):
        import csv
        with open(file_path, 'r') as f:
            reader = csv.reader(f)
            return [row[0] for row in reader]  # First column
    else:
        with open(file_path, 'r') as f:
            return f.read().strip().split('\n')
```

> "All other code remains unchanged — the service contract stays the same."

---

### Q4: "Walk me through the data flow for one student's grading"

**Answer:**
> "Let me show you the complete data flow with a diagram:"

```
┌─────────────────────────────────────────────────────────────────┐
│                   DATA FLOW: Student Grading                    │
└─────────────────────────────────────────────────────────────────┘

1. CLIENT (Browser)
   │
   │ POST /upload/all
   │ (answer_key, student_files[], teacher_id)
   ▼
2. FLASK ROUTE (app.py:48-71)
   │ • Validate files
   │ • Extract teacher_id
   ▼
3. TestService.process_test_upload() (test_service.py:14)
   │
   ├──► DatabaseService.get_teacher_by_id() (database_service.py:55)
   │    └──► Validate teacher exists
   │
   ├──► FileService.create_teacher_directories() (file_service.py:15)
   │    └──► Create folder structure
   │
   ├──► FileService.save_answer_key() (file_service.py:36)
   │    └──► Save answer key file
   │
   ├──► FileService.read_file_lines() (file_service.py:46)
   │    └──► Read answer key content
   │
   ├──► DatabaseService.create_test() (database_service.py:64)
   │    └──► INSERT INTO tests
   │
   ├──► DatabaseService.insert_answer_key() (database_service.py:91)
   │    └──► INSERT INTO answer_keys (for each item)
   │
   └──► FOR EACH student_file:
        │
        ├──► FileService.save_student_answer() (file_service.py:52)
        │    └──► Save student file, extract name
        │
        ├──► FileService.read_file_lines() (file_service.py:46)
        │    └──► Read student answers
        │
        ├──► GradingService.grade_answers() (grading_service.py:9)
        │    │ • Compare line-by-line
        │    │ • Calculate correctness
        │    └──► Return (total_correct, details)
        │
        ├──► DatabaseService.insert_student_answer() (database_service.py:129)
        │    └──► INSERT INTO student_answers (for each item)
        │
        ├──► DatabaseService.insert_result() (database_service.py:169)
        │    └──► INSERT INTO results (summary)
        │
        └──► FileService.write_report() (file_service.py:64)
             └──► Generate test report file

4. RETURN to client
   │ JSON: { success: true, test_id: X, message: "..." }
   ▼
5. BROWSER displays success message
```

> "This flow demonstrates the orchestration pattern — TestService coordinates multiple services while each service handles its single responsibility."

---

### Q5: "How do you handle concurrency with multiple teachers uploading at once?"

**Answer:**
> "SQLite handles concurrent reads well, and writes are serialized with automatic retry. For production, I'd use PostgreSQL with row-level locking. Each teacher has isolated directories (`uploads/[teacher_name]/`), so file system operations don't conflict. The `teacher_id` foreign key in all tables ensures data isolation at the database level."

---

## 🔧 QUICK REFERENCE: FILE LOCATIONS

| Component | File Path | Key Lines |
|-----------|-----------|-----------|
| **Main App** | `app/app.py` | Routes: 32-120 |
| **Database Init** | `app/migrations/init_db.py` | Schema: 17-89 |
| **Database Service** | `app/services/database_service.py` | CRUD: 10-226 |
| **File Service** | `app/services/file_service.py` | File ops: 10-75 |
| **Grading Logic** | `app/services/grading_service.py` | Grade: 9-24 |
| **Teacher Logic** | `app/services/teacher_service.py` | Login: 13-32 |
| **Test Processing** | `app/services/test_service.py` | Upload: 14-75 |
| **Report Details** | `app/services/report_service.py` | Details: 12-86 |
| **Frontend HTML** | `app/templates/index.html` | Full: 1-482 |
| **Styles** | `app/static/css/style.css` | Full: 1-600+ |
| **JavaScript** | `app/static/js/main.js` | Async: 1-400+ |

---

## ✅ CHECKLIST BEFORE DEFENSE

- [ ] Server is running (`python3 app.py` in `app/` directory)
- [ ] Test data files ready (`answer keys/`, `answers/test01/`, `answers/test02/`)
- [ ] Browser open to `http://localhost:5000`
- [ ] VS Code open with project structure visible
- [ ] This script printed or on second monitor
- [ ] Practice live coding: add a print statement, change grading logic, add a new field
- [ ] Review SOLID principles explanations
- [ ] Print or display architecture diagrams (included in this document)

---

## 📊 APPENDIX: ADDITIONAL VISUAL AIDS

### A. SOLID Principles Applied

```
┌─────────────────────────────────────────────────────────────────┐
│               SOLID PRINCIPLES IN THIS PROJECT                  │
└─────────────────────────────────────────────────────────────────┘

S - SINGLE RESPONSIBILITY PRINCIPLE
    Each service has ONE reason to change:
    • DatabaseService    → Database operations change
    • FileService        → File system operations change
    • GradingService     → Grading algorithm changes
    • TeacherService     → Teacher business logic changes
    • TestService        → Test processing workflow changes

O - OPEN/CLOSED PRINCIPLE
    Services are open for extension, closed for modification:
    • New grading algorithms can extend GradingService
    • New report types can extend ReportService
    • No need to modify existing code

L - LISKOV SUBSTITUTION PRINCIPLE
    Services can be swapped with compatible implementations:
    • DatabaseService could swap SQLite → PostgreSQL
    • FileService could swap local storage → cloud storage
    • Interface contracts remain the same

I - INTERFACE SEGREGATION PRINCIPLE
    Services expose only needed methods:
    • GradingService: Only grading methods (static)
    • FileService: Only file operations
    • No "god objects" with 100+ methods

D - DEPENDENCY INVERSION PRINCIPLE
    High-level modules depend on abstractions:
    • TeacherService receives db_service, not concrete DB
    • TestService receives services via constructor
    • Easy to mock for testing
```

### B. Request-Response Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│            HTTP REQUEST-RESPONSE CYCLE                          │
└─────────────────────────────────────────────────────────────────┘

USER ACTION: "Upload Test Files"
     │
     │ 1. User selects files in browser
     ▼
┌──────────────────┐
│   main.js        │  2. JavaScript prepares FormData
│  (Client-side)   │     • answer_key file
└────────┬─────────┘     • student_files[] array
         │               • teacher_id
         │ 3. Async POST fetch()
         ▼
   ╔══════════════════════════════╗
   ║     HTTP Request             ║
   ║  POST /upload/all            ║
   ║  Content-Type: multipart/... ║
   ║  Body: FormData              ║
   ╚═══════════════════╤══════════╝
                       │
                       ▼
   ┌─────────────────────────────┐
   │   Flask app.py              │  4. Route handler
   │   @app.route('/upload/all') │     • Parse request
   └──────────────┬──────────────┘     • Validate files
                  │
                  │ 5. Call service layer
                  ▼
   ┌─────────────────────────────┐
   │   TestService               │  6. Business logic
   │   .process_test_upload()    │     • Orchestrate workflow
   └──────────────┬──────────────┘     • Use other services
                  │
                  │ 7. Return result dict
                  ▼
   ┌─────────────────────────────┐
   │   Flask app.py              │  8. Format response
   │   return jsonify(...)       │     • Create JSON
   └──────────────┬──────────────┘     • Set HTTP status
                  │
                  ▼
   ╔══════════════════════════════╗
   ║     HTTP Response            ║
   ║  Status: 200 OK              ║
   ║  Content-Type: application/  ║
   ║               json           ║
   ║  Body: {success: true, ...}  ║
   ╚═══════════════════╤══════════╝
                       │
                       │ 9. Response received
                       ▼
┌──────────────────────────────┐
│   main.js                    │  10. Parse JSON
│  (Client-side)               │      • Update UI
└──────────────┬───────────────┘      • Show message
               │
               │ 11. DOM manipulation
               ▼
        USER SEES: "Grading completed for test01!"
```

### C. File System Structure After Upload

```
uploads/
└── Prof. Smith/                    ← Teacher isolation
    ├── answer keys/
    │   ├── test01.txt              ← Original answer key file
    │   └── test02.txt
    │
    ├── answers/                    ← Student submissions
    │   ├── test01/
    │   │   ├── stud01.txt          ← Original student files
    │   │   ├── stud02.txt
    │   │   └── stud03.txt
    │   └── test02/
    │       ├── stud01.txt
    │       └── stud02.txt
    │
    └── out/
        └── reports/
            ├── cards/              ← Aggregated report cards
            │   ├── stud01.txt      ← Total score across all tests
            │   ├── stud02.txt
            │   └── stud03.txt
            │
            └── tests/              ← Individual test results
                ├── test01/
                │   ├── stud01.txt  ← "Score: 6/7 (85.71%)"
                │   ├── stud02.txt
                │   └── stud03.txt
                └── test02/
                    ├── stud01.txt
                    └── stud02.txt
```

---

**Good luck with your defense! 🚀**
