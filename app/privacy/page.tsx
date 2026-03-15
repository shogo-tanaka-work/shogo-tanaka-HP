import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "プライバシーポリシー | shogoworks",
  description: "shogoworksのプライバシーポリシー",
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="プライバシーポリシー" lastUpdated="2025年2月4日">
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">1. はじめに</h2>
        <p className="mb-4">
          shogoworks（以下「当サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めています。本プライバシーポリシーは、当サービスがどのような情報を収集し、どのように使用、保護するかについて説明します。
        </p>
        <p>
          当サービスをご利用いただくことで、本プライバシーポリシーに同意したものとみなされます。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">2. 収集する情報</h2>
        <p className="mb-3">当サービスは、以下の種類の情報を収集する場合があります：</p>
        
        <h3 className="text-md font-medium text-foreground mb-2">2.1 ユーザーが提供する情報</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>お名前、メールアドレス（お問い合わせフォーム経由）</li>
          <li>TikTokアカウント情報（TikTok APIを通じて認証した場合）</li>
          <li>その他、ユーザーが任意で提供する情報</li>
        </ul>

        <h3 className="text-md font-medium text-foreground mb-2">2.2 TikTok APIを通じて取得する情報</h3>
        <p className="mb-2">
          当サービスがTikTok APIを利用する場合、ユーザーの明示的な同意のもと、以下の情報にアクセスする場合があります：
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>TikTokユーザープロフィール情報（ユーザー名、表示名、プロフィール画像）</li>
          <li>公開されている動画コンテンツに関する情報</li>
          <li>ユーザーが許可した範囲のアカウントデータ</li>
        </ul>

        <h3 className="text-md font-medium text-foreground mb-2">2.3 自動的に収集される情報</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>IPアドレス、ブラウザの種類、アクセス日時</li>
          <li>デバイス情報（OS、画面解像度等）</li>
          <li>ウェブサイトの利用状況（アクセスしたページ、滞在時間等）</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">3. 情報の利用目的</h2>
        <p className="mb-3">収集した情報は、以下の目的で使用します：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>サービスの提供、運営、改善</li>
          <li>ユーザーからのお問い合わせへの対応</li>
          <li>TikTok APIを活用した機能の提供</li>
          <li>サービスの利用状況の分析</li>
          <li>セキュリティの確保および不正利用の防止</li>
          <li>法的義務の遵守</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">4. 情報の共有と開示</h2>
        <p className="mb-3">当サービスは、以下の場合を除き、ユーザーの個人情報を第三者に開示・共有することはありません：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>ユーザーの明示的な同意がある場合</li>
          <li>法令に基づく開示請求があった場合</li>
          <li>ユーザーまたは公共の安全を守るために必要な場合</li>
          <li>当サービスの権利や財産を保護するために必要な場合</li>
          <li>事業譲渡、合併等に伴い情報が移転する場合（事前に通知します）</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">5. TikTok APIの利用について</h2>
        <p className="mb-3">
          当サービスは、TikTok for Developers APIを利用しています。TikTok APIを通じて取得した情報については、以下の点を遵守します：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>TikTokの開発者利用規約およびデータ共有契約を遵守します</li>
          <li>取得したデータは、ユーザーが同意した目的にのみ使用します</li>
          <li>TikTokから取得したデータを、ユーザーの同意なく第三者に販売、共有、または転送しません</li>
          <li>ユーザーはいつでもTikTokアカウントとの連携を解除できます</li>
          <li>連携解除時には、TikTok APIを通じて取得したデータを削除します</li>
        </ul>
        <p className="mt-3">
          TikTokのプライバシーポリシーについては、
          <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">
            TikTokプライバシーポリシー
          </a>
          をご参照ください。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">6. データの保管とセキュリティ</h2>
        <p className="mb-3">
          当サービスは、収集した個人情報を不正アクセス、紛失、破壊、改ざんから保護するため、適切な技術的・組織的セキュリティ対策を講じています：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>SSL/TLS暗号化による通信の保護</li>
          <li>アクセス制限による不正アクセスの防止</li>
          <li>定期的なセキュリティ監査</li>
          <li>データの適切な期間での保持と削除</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">7. Cookieおよびトラッキング技術</h2>
        <p className="mb-3">
          当サービスは、ウェブサイトの機能向上および利用状況の分析のため、Cookieおよび類似のトラッキング技術を使用する場合があります。
        </p>
        <p>
          ユーザーはブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、サービスの一部機能が制限される場合があります。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">8. ユーザーの権利</h2>
        <p className="mb-3">ユーザーは、ご自身の個人情報について以下の権利を有します：</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong className="text-foreground">アクセス権</strong>：当サービスが保有するご自身の個人情報へのアクセスを請求できます</li>
          <li><strong className="text-foreground">訂正権</strong>：不正確な個人情報の訂正を請求できます</li>
          <li><strong className="text-foreground">削除権</strong>：一定の条件下で個人情報の削除を請求できます</li>
          <li><strong className="text-foreground">処理制限権</strong>：個人情報の処理の制限を請求できます</li>
          <li><strong className="text-foreground">データポータビリティ権</strong>：個人情報を構造化された形式で受け取ることができます</li>
          <li><strong className="text-foreground">異議申立権</strong>：特定の処理に対して異議を申し立てることができます</li>
        </ul>
        <p className="mt-3">
          これらの権利を行使する場合は、下記のお問い合わせ先までご連絡ください。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">9. 未成年者のプライバシー</h2>
        <p>
          当サービスは、13歳未満の児童から意図的に個人情報を収集することはありません。13歳未満の方は、保護者の同意なく当サービスを利用しないでください。万が一、13歳未満の児童から個人情報を収集したことが判明した場合、速やかに当該情報を削除します。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">10. 国際的なデータ転送</h2>
        <p>
          当サービスは日本国内で運営されていますが、サービスの提供に伴い、ユーザーの情報が日本国外に転送される場合があります。その場合、適切な保護措置を講じた上で転送を行います。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">11. プライバシーポリシーの変更</h2>
        <p>
          当サービスは、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、サービス上での通知またはその他適切な方法でお知らせします。変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じます。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">12. お問い合わせ</h2>
        <p className="mb-3">
          本プライバシーポリシーに関するご質問、ご意見、または個人情報に関する請求がある場合は、以下の連絡先までお問い合わせください：
        </p>
        <div className="glass rounded-lg p-4">
          <p className="mb-1"><strong className="text-foreground">サービス名：</strong>shogoworks</p>
          <p className="mb-1"><strong className="text-foreground">運営者：</strong>田中省伍</p>
          <p><strong className="text-foreground">お問い合わせ：</strong>
            <a href="/" className="text-teal-400 hover:text-teal-300 underline">
              トップページのお問い合わせフォーム
            </a>
            よりご連絡ください
          </p>
        </div>
      </section>
    </LegalPageLayout>
  )
}
