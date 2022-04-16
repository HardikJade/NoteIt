package com.phoenix.noteit;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.phoenix.noteit.Utils.UtilClass;

public class Splash extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        Thread thread = new Thread(){
            public void run(){
                try{sleep(2500);}
                catch (Exception e){e.printStackTrace();}
                finally{
                    if(!UtilClass.checkLogin(Splash.this)) {
                        Intent it = new Intent(Splash.this, Login.class);
                        startActivity(it);
                    }
                    else{
                        Intent it = new Intent(Splash.this,MainActivity.class);
                        startActivity(it);
                        finish();
                    }
                }
            }
        };
        thread.start();
    }
}