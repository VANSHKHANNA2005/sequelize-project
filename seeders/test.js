const db = require('../models');

async function deleteStudent() {
    await db.student.destroy({
        where: {
            student_id: 6
        }
    });

    console.log('Student Deleted');
}

deleteStudent();
    
