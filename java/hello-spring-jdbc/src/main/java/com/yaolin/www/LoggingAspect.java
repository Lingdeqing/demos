package com.yaolin.www;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Before("execution(public * com.yaolin.www.service.UserService.*(..))")
    void doAccessCheck() {
        System.out.println("[Before] access check");
    }

    // @Around("execution(public * com.yaolin.www.service.MailService.*(..))")
    // Object doLogging(ProceedingJoinPoint pjp) throws Throwable {
    //     System.out.println("[Around] start" + pjp.getSignature());
    //     Object ret = pjp.proceed();
    //     System.out.println("[Around] end" + pjp.getSignature());
    //     return ret;
    // }
}