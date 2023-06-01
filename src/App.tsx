import React from 'react';
import Lex from './components/Lex';
import './App.css';

function App() {
  const dummyContents = new Array(1).fill(0).map((_, idx) => {
    return (
      <div key={idx} className="text-gray-400">
        Dummy のコンテンツ Dummy のコンテンツ Dummy のコンテンツ Dummy
        のコンテンツ
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl my-6 text-gray-600">LexV2 Chatbot サンプル</h1>
      <a href="https://github.com/aws-samples/simple-lex-kendra-jp">simple-lex-kendra-jp</a>
      

      {dummyContents}
      <details>
        <summary>学習させたテキスト</summary>
        # 情シス部
          
          このドキュメントは、情報システム部門 (情シス部) についての情報を集約しています。
          対応方法がわからない場合は、情シス部の Slack Channel (#info-sys-dept) か本社 11F での直接対応にて対応いたします。
          
          ## 貸与ラップトップのセットアップ
          
          入社時にお渡ししたユーザー名とパスワードで初回ログインを行います。お渡ししたパスワードは仮の状態ですので、必ず別のパスワードに更新してください。パスワードの更新は、「情シスツール」というツールから行います。情シスツールはデスクトップにショートカットから起動します。続いて、ネットワークに接続します。在宅勤務の場合は、自宅の Wifi 環境に接続した後、VPN ソフトを立ち上げます。先ほど設定したユーザー名とパスワードで、正常に VPN に接続できたことを確認してください。続いて、メールのセットアップを行います。メールクライアントを立ち上げ、ユーザー名とパスワードを入力し、ログインします。ログインできない場合は、パスワードが不正であるか、ネットワーク環境が不安定であることが原因と考えられます。それ以外の理由の場合は、対面による対応が必要になります。ラップトップを持参の上、本社 11F にお越しください。
          
          ## wifi 接続
          
          社内 wifi に接続する際は、SSID が SimpleLexKendra のものを選択し、パスワードは AwesomeLexKendra を入力してください。
          
          ## 勤怠管理
          
          こちらの勤怠管理システムから打刻をします。(https://kintai.xxxxx.xxxx)
          
          ## USB メモリについて
          
          2010 年より原則使用禁止になりました。ファイルを連携する場合は、Amazon WorkDocs を使用してください。ただしどうしても必要な場合は個別に鈴木部長に相談してください。  
          オフライン環境にファイルを連携する場合は、別途情シス部長に相談してください。
          
          ## AWS 利用開始方法
          
          情シス部長の承認が必要です。[申請フロー](https://example.jp/shinsei)から承認依頼を出してください。  
          
          ## AWS 利用にあたっての注意点
          
          ### 必須(must)
          
          * root ユーザーについて
              * root ユーザーは MFA デバイスを用いた二段階認証を有効にします
              * 初期のアカウントの作成、Administrator Access をつけた IAM User 作成、アカウント削除のみに使用してください
          
          * IAM ユーザーについて
              * 作成した IAM User も二段階認証を有効にし、原則アクセスキーの発行は禁止です。
                  * 原則 IAM role を使用してください。ただしどうしても必要な場合は個別に情シス部長に相談してください。
          
          * [Security #1 アカウント作成後すぐやるセキュリティ対策](https://pages.awscloud.com/JAPAN-event-OE-Hands-on-for-Beginners-Security-1-2022-reg-event.html?trk=aws_introduction_page) の実施
          
          ### 推奨(may)
          
          * マネジメントコンソールや各リソースにアクセスできる IP アドレスは会社の IP アドレスにしぼりましょう
          * AWS Budget で使用見込みの料金を設定し、利用者に通知する設定をしましょう
          * 
      </details>

      <Lex />
    </div>
  );
}

export default App;
