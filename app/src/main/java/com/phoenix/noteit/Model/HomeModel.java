package com.phoenix.noteit.Model;

public class HomeModel {
    private String noteTitle;
    private String dateTime;

    public HomeModel(String noteTitle, String dateTime) {
        this.noteTitle = noteTitle;
        this.dateTime = dateTime;
    }
    public String getNoteTitle() {return noteTitle;}
    public void setNoteTitle(String noteTitle) {this.noteTitle = noteTitle;}
    public String getDateTime() {return dateTime;}
    public void setDateTime(String dateTime) { this.dateTime = dateTime;}

}
