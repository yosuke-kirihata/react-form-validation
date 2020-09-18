import React from "react";

interface IProps {}

interface IState {
    info: {
        email: '',
        last_name: '',
        first_name: '',
        phone_no: '',
        password: ''
    },
    message:{
        email: '',
        last_name: '',
        first_name: '',
        phone_no: '',
        password: ''
    }
}

// export default class Subscribe extends React.Component {
export default class Subscribe extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            info: {
                email: '',
                last_name: '',
                first_name: '',
                phone_no: '',
                password: ''
            },
            message:{
                email: '',
                last_name: '',
                first_name: '',
                phone_no: '',
                password: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {//anyで逃げる
        const name: string = event.target.name;
        const value: string = event.target.value;
        const { info, message } = this.state; //分割代入

        this.setState({
            info: { ...info, [name]: value }//この書き方は一体？
        });

        this.setState({
            message: {...message, [name]: this.validator(name, value)}//この書き方は一体？
        });
    }

    validator(name: string, value: string) {
        switch (name) {
            case 'email':
                return this.emailValidation(value);
            case 'last_name':
                return this.lastNameValidation(value);
            case 'first_name':
                return this.firstNameValidation(value);
            case 'phone_no':
                return this.phoneNoValidation(value);
            case 'password':
                return this.passwordValidation(value);
        }
    }

    emailValidation(value: string) {
        if (!value) return 'メールアドレス';
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regex.test(value)) return '※正しい形式でメールアドレスを入力してください';
        return '';
    }

    lastNameValidation(value: string) {
        if (value.length < 2) return '※名は1文字以上で入力してください';
        return '';
    }

    firstNameValidation(value: string) {
        if (value.length < 2) return '※姓は1文字以上で入力してください';
        return '';
    }

    phoneNoValidation(value: string) {
        if (value.length < 8) return '※電話番号は8文字以上で入力してください';
        return '';
    }

    passwordValidation(value: string) {
        // if (!value) return 'パスワード';
        if (value.length < 8) return '※パスワードは8文字以上で入力してください';
        return '';
    }

    confirmPasswordValidation(value: string) {
        // if (!value) return 'パスワード（確認）';
        if (value.length < 8) return '※パスワードは8文字以上で入力してください';
        return '';
    }

    render() {
        return (
            <div>
            <h2>Subscribe</h2>
            <p>メールアドレス</p>
            <input type="text" name="email" value={this.state.info.email} onChange={this.handleChange}/>
            <p>{this.state.message.email}</p>
            <p>姓</p>
            <input type="text" name="first_name" value={this.state.info.first_name} onChange={this.handleChange}/>
            <p>{this.state.message.first_name}</p>
            <p>名</p>
            <input type="text" name="last_name" value={this.state.info.last_name} onChange={this.handleChange}/>
            <p>{this.state.message.last_name}</p>
            <p>電話番号</p>
            <input type="text" name="phone_no" value={this.state.info.phone_no} onChange={this.handleChange}/>
            <p>{this.state.message.phone_no}</p>
            <p>パスワード</p>
            <input type="password" name="password" value={this.state.info.password} onChange={this.handleChange}/>
            <p>{this.state.message.password}</p>
            <p>パスワード（確認）</p>
            <input type="text" name="confirm_password"/>
            <p>{this.state.message.password}</p>
            <input type="submit" value="登録"
            disabled={!this.state.info.email || !this.state.info.password || this.state.message.email || this.state.message.password } />
            </div>
        );
    }

}