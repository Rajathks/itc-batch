package com;

import java.util.StringTokenizer;

public class StringTokenizer_Demo {
	
	public static void main(String[] args) {
		
		String str="preethi,reshma";
		
		StringTokenizer st=new StringTokenizer(str,",",true);
		while(st.hasMoreTokens()){
			String tok=st.nextToken();
		}
		
	}

}
