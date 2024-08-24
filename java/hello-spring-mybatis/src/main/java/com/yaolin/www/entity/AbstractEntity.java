package com.yaolin.www.entity;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class AbstractEntity {
    private Long id;
    private Long createdAt = System.currentTimeMillis();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Long id) {
        this.createdAt = id;
    }

    public ZonedDateTime getCreatedDateTime() {
        return Instant.ofEpochMilli(createdAt).atZone(ZoneId.systemDefault());
    }
}
