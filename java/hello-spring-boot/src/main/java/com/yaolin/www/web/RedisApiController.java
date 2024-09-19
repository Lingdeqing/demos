package com.yaolin.www.web;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.yaolin.www.utils.JSONUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.Set;


@RestController
@RequestMapping("/redis")
public class RedisApiController {

    @Autowired
    RedisTemplate redisTemplate;

    @Autowired
    StringRedisTemplate stringRedisTemplate;

    @GetMapping("/get")
    public String get(@RequestParam("key") String key) {
        return stringRedisTemplate.opsForValue().get(key);
    }

    @GetMapping("/set")
    public void set(@RequestParam("key") String key, @RequestParam("value") String value) {
        stringRedisTemplate.opsForValue().set(key, value);
    }

    @GetMapping("/del")
    public Boolean del(@RequestParam("key") String key) {
        return stringRedisTemplate.delete(key);
    }

    @GetMapping("/keys")
    public Set<String> keys() {
        return stringRedisTemplate.keys("*");
    }

    @GetMapping("/obj/get")
    public MyModel getObj(@RequestParam("key") String key) {
        String str = stringRedisTemplate.opsForValue().get(key);
        return JSONUtils.parse(str, MyModel.class);
    }

    @GetMapping("/obj/set")
    public void setObj(@RequestParam("key") String key, @RequestParam("value") String value) {
        MyModel myModel = new MyModel(key, value);
        stringRedisTemplate.opsForValue().set(key, JSONUtils.stringify(myModel));
    }

    @GetMapping("/info/get")
    public Info getInfo(@RequestParam("key") String key) {
        return (Info) redisTemplate.opsForValue().get(key);
    }

    @GetMapping("/info/set")
    public void setInfo(@RequestParam("key") String key, @RequestParam("value") String value) {
        Info info = new Info(key, value);
        redisTemplate.opsForValue().set(key, info);
    }
}


class MyModel {
    public MyModel() {
    }

    public MyModel(String key, String value) {
        this.key = key;
        this.value = value;
    }

    private String key;
    private String value;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}


class Info implements Serializable {
    private String key;
    private String value;

    public Info(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }


}


