# Flask + React 連携の sample
AIバックエンドをもったwebアプリを開発するにあたり、FlaskとReactの連携を試すことにしました。Pythonで記述したデータ生成メソッドやAiによる推論メソッドをFlaskアプリにまとめ、Reactアプリから問い合わせることでweb UIへの表示を目指します。

# 使い方
Python仮想環境へFlaskとFlask-Corsをインストールします。apiディレクトリに入り、Powershellで以下を実行するとFlask appが走ります。
```powershell
python app.py
```
その状態でReact appを走らせます。sampleディレクトリに入り、cmdで以下を実行するとReact appが走ります。
```cmd
npm start
```
