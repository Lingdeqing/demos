package com.yaolin.www.utils;

import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtils {
    public static <T> T parse(String str, Class<T> clazz) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            T obj = mapper.readValue(str, clazz);
            return obj;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String stringify(Object obj) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.writeValueAsString(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }
}
