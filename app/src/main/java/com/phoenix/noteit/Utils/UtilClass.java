package com.phoenix.noteit.Utils;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import com.phoenix.noteit.Login;

public class UtilClass {

    public static void SaveToken(Context context, String prefName, String tokenKey, String token){
        SharedPreferences sharedPreferences =   context.getSharedPreferences(prefName,context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(tokenKey , token);
        editor.apply();
    }

    public static String GetToken(Context context,String prefName,String tokenKey){
        SharedPreferences sharedPreferences = context.getSharedPreferences(prefName,context.MODE_PRIVATE);
        String token  = sharedPreferences.getString(tokenKey,"");
        return token;
    }

    public static boolean checkLogin(Context context){
        String token = GetToken(context,"LoginToken", "JWT");
        if(token == "" || token == null){return false;}
        else {return true;}
    }
}
