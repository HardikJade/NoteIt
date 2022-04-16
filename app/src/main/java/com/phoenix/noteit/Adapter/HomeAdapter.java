package com.phoenix.noteit.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.phoenix.noteit.Model.HomeModel;
import com.phoenix.noteit.R;

import java.util.ArrayList;

public class HomeAdapter extends RecyclerView.Adapter<HomeAdapter.viewHolder> {

    private ArrayList<HomeModel> list;
    private Context context;

    public HomeAdapter(ArrayList<HomeModel> list, Context context) {
        this.list = list;
        this.context = context;
    }

    @NonNull
    @Override
    public viewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.home_note_item,parent,false);
        return new viewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull viewHolder holder, int position) {
        HomeModel model = list.get(position);
        holder.titleText.setText(model.getNoteTitle().toString());
        holder.dateTime.setText(model.getDateTime().toString());
    }

    @Override
    public int getItemCount() {return list.size();}

    public class viewHolder extends RecyclerView.ViewHolder {
        private TextView titleText;
        private TextView dateTime;
        public viewHolder(@NonNull View itemView) {
            super(itemView);
            this.titleText = itemView.findViewById(R.id.note_name);
            this.dateTime = itemView.findViewById(R.id.note_time);
        }
    }
}
