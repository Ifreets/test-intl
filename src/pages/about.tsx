import { useFormatter, useTranslations } from "next-intl";

import { GetServerSidePropsContext } from "next";
import PageLayout from "@/components/PageLayout";
import pick from "lodash/pick";

export default function About() {
  const t = useTranslations("About");
  const format = useFormatter();
  const lastUpdated = new Date("2021-12-23T10:04:45.567Z");

  return (
    <PageLayout title={t("title")}>
      <p>
        {t("lastUpdated", {
          lastUpdated,
          lastUpdatedRelative: format.relativeTime(lastUpdated),
        })}
      </p>
    </PageLayout>
  );
}

About.messages = ["About", ...PageLayout.messages];

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        About.messages
      ),
      // Note that when `now` is passed to the app, you need to make sure the
      // value is updated from time to time, so relative times are updated. See
      // https://next-intl-docs.vercel.app/docs/usage/configuration#global-now-value
      now: new Date().getTime(),
    },
  };
}
