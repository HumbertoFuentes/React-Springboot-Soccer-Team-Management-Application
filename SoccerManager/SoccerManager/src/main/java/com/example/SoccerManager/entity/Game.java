package com.example.SoccerManager.entity;

import jakarta.persistence.*;

import java.sql.Date;
import java.time.LocalTime;


@Entity
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id")
    private Integer matchId;

    @Column(name = "score")
    private String score;

    @Column(name = "opponent")
    private String opponent;

    @Column(name = "time")
    private LocalTime time;

    @Column(name = "date")
    private Date date;

    @Column(name = "location")
    private String location;

    @Column(name = "result")
    private String result;

    @Column(name = "notes")
    private String matchNotes;

    public Game(){

    }

    public Game(String score, String opponent, LocalTime time, Date date, String location, String result, String matchNotes) {
        this.score = score;
        this.opponent = opponent;
        this.time = time;
        this.date = date;
        this.location = location;
        this.result = result;
        this.matchNotes = matchNotes;
    }

    public Integer getGameId() {
        return matchId;
    }

    public void setGameId(Integer matchId) {
        this.matchId = matchId;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getOpponent() {
        return opponent;
    }

    public void setOpponent(String opponent) {
        this.opponent = opponent;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getGameNotes() {
        return matchNotes;
    }

    public void setGameNotes(String matchNotes) {
        this.matchNotes = matchNotes;
    }

    @Override
    public String toString() {
        return "Game{" +
                "gameId=" + matchId +
                ", score='" + score + '\'' +
                ", opponent='" + opponent + '\'' +
                ", time=" + time +
                ", date=" + date +
                ", location='" + location + '\'' +
                ", result='" + result + '\'' +
                ", gameNotes='" + matchNotes + '\'' +
                '}';
    }
}
