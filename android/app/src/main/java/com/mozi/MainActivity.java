package com.mozi;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen; // 1.导入启动屏包

import cn.jpush.android.api.JPushInterface;

public class MainActivity extends ReactActivity {


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Mozi";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) { // 2. 显示启动方法
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
        JPushInterface.init(this);

    }
    @Override
    protected void onPause() {
        super.onPause();
        JPushInterface.onPause(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        JPushInterface.onResume(this);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }


}
