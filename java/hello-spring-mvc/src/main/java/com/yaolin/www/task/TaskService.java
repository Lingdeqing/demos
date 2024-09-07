package com.yaolin.www.task;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class TaskService {
    private Logger logger = LoggerFactory.getLogger(getClass());

    @Scheduled(initialDelay = 5_000, fixedRate = 2_000)
    public void helloTask() {
        logger.info("hello");
    }

    @Scheduled(cron = "${task.report:0 15 2 * * *}")
    public void helloCron() {
        logger.info("hello cron");
    }
}
