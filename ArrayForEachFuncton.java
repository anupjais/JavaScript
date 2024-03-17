import java.util.*;
class ArrayForEachFuncton
{
	public static void main(String[] args) {
		int [] arr = {1,2,3,4,5,6,7,8,9};
		for (int i : arr)
		{
			System.out.print(i+" ");
		}
		System.out.println();
		List<String> list = Arrays.asList("ramesh","suresh","ganesh","mahesh");
		list.forEach((ele)->System.out.println(ele));
		// arr.forEach)
	}
}