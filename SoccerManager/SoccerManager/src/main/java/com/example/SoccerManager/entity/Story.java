package com.example.SoccerManager.entity;


import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "story")
public class Story {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private Integer storyId;

    @Column(name = "title")
    private String title;

    @Column(name = "image_Url")
    private String imageUrl;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private Date date;

    public Story(){}
    public Story(String title, String imageUrl, String description, Date date) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.date = date;
    }

    public Integer getStoryId() {
        return storyId;
    }

    public void setStoryId(Integer storyId) {
        this.storyId = storyId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Story{" +
                "storyId=" + storyId +
                ", title='" + title + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }
}
