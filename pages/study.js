import ConditionLayout from "../comps/ConditionLayout";
// import webgazer from "webgazer";
import * as React from "react";
import { useRouter } from "next/router";

export default function Study() {
  const router = useRouter();
  return (
    <ConditionLayout
      condition={router.query.condition}
      section={router.query.section}
    />
  );
}
