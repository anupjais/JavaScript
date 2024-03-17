interface Interf
{
	int addition(int num1, int num2);
}
class LemdaExpression
{
	public static void main(String[] args) {
		Interf obj = (num1, num2)-> num1+num2;
		System.out.println(obj.addition(29,29));
	}
}