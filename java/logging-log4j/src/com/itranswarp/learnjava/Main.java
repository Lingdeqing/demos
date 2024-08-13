package com.itranswarp.learnjava;

import java.io.UnsupportedEncodingException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Learn Java from https://www.liaoxuefeng.com/
 * 
 * @author liaoxuefeng
 */
public class Main {

	static final Log log = LogFactory.getLog(Main.class);

	public static void main(String[] args) {
		System.out.println("121");
		log.info("Start process...");
		try {
			"".getBytes("invalidCharsetName");
		} catch (UnsupportedEncodingException e) {
			log.error("Invalid encoding.", e);
		}
		log.info("Process end.");
	}
}
