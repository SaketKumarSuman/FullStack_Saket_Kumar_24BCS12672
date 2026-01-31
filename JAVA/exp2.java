class Area {
    void area(int s) {
        System.out.println("Area of square: " + (s * s));
    }
    void area(int l, int b) {
        System.out.println("Area of rectangle: " + (l * b));
    }
    void area(int r) {
        System.out.println("Area of circle: " + (3.14 * r * r));
    }

    public static void main(String[] args) {
        Area a = new Area();

        a.area(6);
        a.area(4, 5);
        a.area(2.5);
    }
}