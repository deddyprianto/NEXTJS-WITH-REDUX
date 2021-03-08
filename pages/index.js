import React, { useEffect, useRef } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { dataFetch } from "../store/action/postAction";
export default function Home() {
  const dataMain = useSelector((state) => state.mainData);
  const { loading, posts, err } = dataMain;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataFetch());
  }, []);
  return (
    <>
      <Head>
        <title>Machine Learning | API</title>
      </Head>
      <div className="main">
        {loading && (
          <div>
            <h1>loading</h1>
          </div>
        )}
        {!posts ? (
          <div>tidak ada data sama sekali</div>
        ) : (
          <div className="">
            {posts.map((res) => (
              <h1>{res}</h1>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
