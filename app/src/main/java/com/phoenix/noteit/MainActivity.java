package com.phoenix.noteit;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import com.google.android.material.navigation.NavigationView;
import com.phoenix.noteit.Model.HomeModel;
import com.phoenix.noteit.Adapter.HomeAdapter;
import com.phoenix.noteit.Utils.UtilClass;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        if(!UtilClass.checkLogin(this)){
            Intent it = new Intent(this, Login.class);
            startActivity(it);
            return;
        }
        bindRenderer();
    }

    private void bindRenderer() {
        RecyclerView recyclerView = findViewById(R.id.main_recycler_view);
        ArrayList<HomeModel> list = new ArrayList<>();
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        list.add(new HomeModel("Title" , "Time"));
        HomeAdapter adapter = new HomeAdapter(list,this);
        recyclerView.setAdapter(adapter);
        recyclerView.setLayoutManager(new GridLayoutManager(MainActivity.this,2));
    }

    private void setNavigationView() {
        DrawerLayout drawerLayout = findViewById(R.id.drawerLayout);
        Toolbar toolbar = findViewById(R.id.toolbar);
        ActionBarDrawerToggle actionBarDrawerToggle = new ActionBarDrawerToggle(this, drawerLayout, toolbar, R.string.app_name, R.string.app_name);
        drawerLayout.addDrawerListener(actionBarDrawerToggle);
        actionBarDrawerToggle.syncState();
        NavigationView navigationView = (NavigationView) findViewById(R.id.navigation_menu);
        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
                switch (menuItem.getItemId()){
                    case  R.id.nav_home:
                        break;
                    case R.id.nav_share:
                        break;
                    default:
                        break;
                }
                return false;
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu)
    {getMenuInflater().inflate(R.menu.menu,menu);return true;}

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item)
    {int item_id = item.getItemId();if(item_id == R.id.menu_search){return  true;}return true;}

}