// Your code goes here
const students = JSON.parse(localStorage.getItem('listOfStudents'));
const homework = JSON.parse(localStorage.getItem('homeworkResults'));


function Student (name, email){
    this.name;
    this.email;
    this.arr = [];
    this.getName = function(){
    let _name = name
    this.name = _name
    
    console.log(this.name)
    }
    this.getEmail = function(){
        let _email = email
        this.email = _email
        
    } 
    this.addHomeworkResult = function(){

        function CreateHmResult(topic, succes){
            this.topic = topic;
            this.succes = succes;

        }
        this.arr.push(new CreateHmResult('HTML','true'))
        
    }
}
const student = new Student('John', 'john@gmail.com')


student.name
student.getName()
student.getEmail()
student.addHomeworkResult()



//next

function FrontendLab(students, failedLimit){
    this.studentsList = []
    this.arr = [];
    this.failedHomeworksLimit; 
    this.failefailedLimit = failedLimit
    this.addHomeworkResult = function(homework){
      
        
        this.arr.push(homework.results)
        console.log(this.arr)
    }   
    this.printStudentsList = function(){
        let _students = students
        this.studentsList = _students

        let html = this.arr[0]
        let css = this.arr[1];
        console.log(html)
        console.log(css)

        
        for(let i = 0; i < this.studentsList.length; i++){

            console.log(this.studentsList[i])
            console.log(html[i])
            console.log(css[i])
            
            
        }

    }
    
}
const lab = new FrontendLab(students, 1)
lab.addHomeworkResult(homework[0])
lab.addHomeworkResult(homework[1])


