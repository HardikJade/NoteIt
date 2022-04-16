package com.phoenix.noteit;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.phoenix.noteit.Utils.UtilClass;

public class ActualLogin extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_actual_login);

        Button login = findViewById(R.id.final_login_btn);
        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                UtilClass.SaveToken(ActualLogin.this,"LoginToken","JWT","This is Token");
                Intent it = new Intent(ActualLogin.this,MainActivity.class);
                startActivity(it);
                finish();
            }
        });
    }

    @Override
    protected void onStart() {
        super.onStart();
        String token = UtilClass.GetToken(this,"LoginToken","JWT");
        if(token.length() != 0){finish();}
    }
}