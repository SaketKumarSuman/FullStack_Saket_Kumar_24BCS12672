class Student {
    int id;
    String name;
    double marks;
    Student() {
        id = 0;
        name = "Not Assigned";
        marks = 10;
    }
    Student(int i, String n,  m) {
        id = i;
        name = n;
        marks = m;
    }
    void display() {
        System.out.println("Student ID:" + id);
        System.out.println("Name: " + name);
        System.out.println("Marks: " + marks);
        System.out.println();
    }

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.display();

        Student s2 = new Student(101, "Rahul", 20);
        s2.display();
    }
}