import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal-page-layout"

export const metadata: Metadata = {
  title: "利用規約 | shogoworks",
  description: "shogoworksの利用規約",
}

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="利用規約" lastUpdated="2025年2月4日">
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">1. はじめに</h2>
        <p className="mb-4">
          この利用規約（以下「本規約」）は、shogoworks（以下「当サービス」）が提供するウェブサイトおよび関連サービスの利用条件を定めるものです。
        </p>
        <p>
          当サービスをご利用いただく前に、本規約をよくお読みください。当サービスにアクセスまたは利用することにより、本規約に同意したものとみなされます。本規約に同意いただけない場合は、当サービスをご利用いただくことはできません。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">2. サービスの説明</h2>
        <p className="mb-3">当サービスは、以下の機能を提供します：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>ポートフォリオおよびプロフィール情報の閲覧</li>
          <li>お問い合わせフォームによる連絡機能</li>
          <li>TikTok APIを活用した各種機能（該当する場合）</li>
          <li>その他、当サービスが提供するコンテンツおよび機能</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">3. TikTok APIの利用について</h2>
        <p className="mb-3">
          当サービスは、TikTok for Developers APIを利用しています。TikTok APIを利用する機能を使用する場合、以下の条件に同意していただく必要があります：
        </p>
        
        <h3 className="text-md font-medium text-foreground mb-2">3.1 認証と同意</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>TikTokアカウントとの連携には、TikTokの認証プロセスを通じた明示的な同意が必要です</li>
          <li>ユーザーは、当サービスがアクセスする情報の範囲を確認した上で同意を行います</li>
          <li>同意はいつでも撤回でき、連携を解除することができます</li>
        </ul>

        <h3 className="text-md font-medium text-foreground mb-2">3.2 データの取り扱い</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>TikTok APIを通じて取得したデータは、当サービスの機能提供にのみ使用されます</li>
          <li>ユーザーの同意なく、データを第三者に販売、共有、または転送することはありません</li>
          <li>連携解除時には、TikTok APIを通じて取得したデータを削除します</li>
        </ul>

        <h3 className="text-md font-medium text-foreground mb-2">3.3 TikTokの規約への準拠</h3>
        <p>
          当サービスの利用にあたっては、TikTokの
          <a href="https://www.tiktok.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">
            利用規約
          </a>
          および
          <a href="https://www.tiktok.com/community-guidelines" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">
            コミュニティガイドライン
          </a>
          も遵守していただく必要があります。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">4. ユーザーの責任</h2>
        <p className="mb-3">当サービスをご利用いただくにあたり、ユーザーは以下の事項を遵守していただく必要があります：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>正確かつ最新の情報を提供すること</li>
          <li>アカウント情報（該当する場合）の機密性を維持すること</li>
          <li>適用されるすべての法令および規則を遵守すること</li>
          <li>他のユーザーまたは第三者の権利を侵害しないこと</li>
          <li>当サービスのセキュリティを損なう行為を行わないこと</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">5. 禁止事項</h2>
        <p className="mb-3">ユーザーは、当サービスの利用にあたり、以下の行為を行ってはなりません：</p>
        <ul className="list-disc list-inside space-y-1">
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当サービスのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
          <li>当サービスの運営を妨害するおそれのある行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>他のユーザーに成りすます行為</li>
          <li>当サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
          <li>当サービスのコンテンツを無断で複製、改変、または再配布する行為</li>
          <li>スパム、フィッシング、またはその他の悪意ある行為</li>
          <li>TikTok APIを不正に使用する行為</li>
          <li>その他、当サービスが不適切と判断する行為</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">6. 知的財産権</h2>
        <p className="mb-3">
          当サービスに掲載されているコンテンツ（テキスト、画像、ロゴ、デザイン、ソフトウェア等）に関する知的財産権は、当サービスまたは正当な権利者に帰属します。
        </p>
        <p className="mb-3">
          ユーザーは、当サービスのコンテンツを個人的かつ非商業的な目的でのみ使用することができます。事前の書面による許可なく、コンテンツを複製、改変、配布、または商業目的で使用することは禁止されています。
        </p>
        <p>
          TikTokを通じて取得したコンテンツについては、TikTokおよび各コンテンツの権利者の知的財産権を尊重し、適切な権利処理を行います。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">7. 免責事項</h2>
        <p className="mb-3">
          当サービスは「現状有姿」で提供されます。当サービスは、以下の事項について一切の保証を行いません：
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>サービスの中断がないこと、またはエラーがないこと</li>
          <li>サービスが特定の目的に適合すること</li>
          <li>サービスに含まれる情報の正確性、完全性、または有用性</li>
          <li>TikTok APIの可用性または継続性</li>
        </ul>
        <p>
          当サービスは、ユーザーが当サービスを利用したこと、または利用できなかったことに起因するいかなる損害についても、法律で許容される最大限の範囲で責任を負いません。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">8. サービスの変更・中断・終了</h2>
        <p className="mb-3">
          当サービスは、以下の場合に、ユーザーへの事前の通知なくサービスの全部または一部を変更、中断、または終了することがあります：
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>システムの保守・点検を行う場合</li>
          <li>火災、停電、天災等の不可抗力により、サービスの提供が困難となった場合</li>
          <li>TikTok APIの提供が中断または終了した場合</li>
          <li>その他、当サービスがサービスの提供が困難と判断した場合</li>
        </ul>
        <p className="mt-3">
          当サービスは、サービスの変更、中断、または終了によりユーザーに生じた損害について、一切の責任を負いません。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">9. 損害賠償</h2>
        <p>
          ユーザーが本規約に違反し、当サービスまたは第三者に損害を与えた場合、ユーザーはその損害を賠償する責任を負います。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">10. 利用規約の変更</h2>
        <p>
          当サービスは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することがあります。変更後の利用規約は、本ページに掲載した時点から効力を生じるものとします。重要な変更がある場合は、サービス上での通知またはその他適切な方法でお知らせするよう努めます。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">11. 準拠法および管轄裁判所</h2>
        <p className="mb-3">
          本規約の解釈および適用は、日本法に準拠するものとします。
        </p>
        <p>
          本規約に関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">12. 分離可能性</h2>
        <p>
          本規約のいずれかの条項が無効または執行不能と判断された場合でも、その他の条項は引き続き有効に存続するものとします。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-3">13. お問い合わせ</h2>
        <p className="mb-3">
          本規約に関するご質問やご意見がある場合は、以下の連絡先までお問い合わせください：
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
