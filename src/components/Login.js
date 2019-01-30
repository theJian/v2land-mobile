import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { TwitterButton, WeiboButton } from './login';
import { Button, Input } from 'react-native-elements';
import { commonStyle, paddings, buttonStyle, buttonTextStyle } from '../styles';
import { Title } from './elements';

const Login = ({
  onLoginClick,
  onRegisterClick,
  errorMessage,
  setLoginName,
  setPasswd,
  isLoading,
  loginName,
  passwd,
}) => (
  <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <ScrollView style={[paddings.pageTop]}>
      <View style={[paddings.largeInterval, paddings.side, { flex: 1 }]}>
        <Title style={paddings.largeInterval}>登录</Title>
        <View style={[styles.loginInterface, paddings.largeInterval]}>
          <Input
            label="用户名或邮箱"
            containerStyle={{ paddingHorizontal: 0 }}
            onChangeText={setLoginName}
            value={loginName}
            shake={true}
          />
          <Input
            label="密码"
            containerStyle={{ marginTop: 16, paddingHorizontal: 0 }}
            onChangeText={setPasswd}
            value={passwd}
            errorMessage={errorMessage}
            errorStyle={[commonStyle.noSideMargins, { fontSize: 14 }]}
            secureTextEntry
          />
        </View>
        <View style={styles.loginButtons}>
          <Button
            onPress={onRegisterClick}
            title="注册"
            type="clear"
            disabled={true}
          />
          <Button
            onPress={onLoginClick}
            loading={isLoading}
            containerStyle={commonStyle.noSideMargins}
            buttonStyle={[buttonStyle.button, buttonStyle.primary]}
            textStyle={buttonTextStyle.button}
            title="登录"
          />
        </View>
        <View>
          <Text style={[styles.socialText]}>或使用第三方账号登入</Text>
          <View style={styles.socialButtons}>
            <WeiboButton />
            <TwitterButton />
          </View>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  loginInterface: {
    flex: 1,
    width: '100%',
  },
  loginButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  socialText: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 30,
    marginBottom: 10,
    color: '#333',
  },
  socialButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default Login;
