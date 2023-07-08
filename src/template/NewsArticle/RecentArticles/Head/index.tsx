import { Helmet } from "react-helmet-async"
import config from "../../../../config"
const Head = (
  {
    key,
    link
  }: {
    key: number,
    link: string
  }
) => {
  return (
    <Helmet>
      <link
        key={key}
        rel="prerender"
        href={`${config.publicUrl}/news/${link}`}
      />
    </Helmet>
  )
}

export default Head