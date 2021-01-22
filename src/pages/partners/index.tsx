/* eslint-disable camelcase */
import React, { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { Header, TitleContainer, Form } from "./styles";

import api from "../../services/api";

const Partners: React.FC = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return;
    setTimeout(() => {
      try {
        const callApi = async () => {
          const response = await fetch(
            "http://localhost:4000/v3/packages?skip=0&title=A",
            {
              headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "access-control-allow-origin": "*",
                authorization:
                  "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjVEMUU0NDhCNUY1OUQ2QTNFN0JCODY3M0Q5MkU5QkQ0MjUyODQ5NTUiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJYUjVFaTE5WjFxUG51NFp6MlM2YjFDVW9TVlUifQ.eyJuYmYiOjE2MTEyNzkyMTAsImV4cCI6MTYxMTI4MjgxMCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5saW5rYXBpLmNvbS5iciIsImF1ZCI6WyJodHRwczovL2lkZW50aXR5LmxpbmthcGkuY29tLmJyL3Jlc291cmNlcyIsImxrcF9hcGlwb3J0YWwiXSwiY2xpZW50X2lkIjoiNzlhM2U0YWZlMjIwNDc1YmI1MTliZWYzZjhiOTE2MWEiLCJzY29wZSI6WyJsa3BfYXBpcG9ydGFsIl19.UISFuNhIewMxKDAomuceonHNMpsrYpBKfFkr1eZzIVNNNslSXNNvypeOdA2jSiVHyLVJfJNhPFBPClersf_ou_glo4KVM3DGHfx10gwWnASDqD8rqfJDLfzLn6A78qa2TJC4Yy0b6FWNcmjVUy3cA-PM6hl4J0kPpJwF-Z0DdjCHpx5ae-g58uWPB8bYceOv9WGrm60UY_LapaZsDhs1VONB1lXAwYNj08oY8HQ0hvAzJzBCzfUKj4XaVsLS8PVCo3fN6ZJcA3KzyphV3jZ6DXd3CbQ-atyVzG8nFhwnWqfKba_fYr3b3JGvQSeIb-ksZfgcNmotUQhd5RE9C6fhRA",
                "content-type": "application/json",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "sec-gpc": "1",
              },
              referrer: "http://localhost:3000",
              referrerPolicy: "strict-origin-when-cross-origin",
              body: null,
              method: "GET",
              mode: "cors",
            }
          );

          return response;
        };

        const data = callApi();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }, 2000);
    // console.log(search)
  }, [search]);

  return (
    <>
      <Header>
        <img
          src="https://malachinidias.derosemethod.org/wp-content/uploads/2019/11/Selo_Gympass_Circle-1_d400.png"
          alt="Gympass"
        />
        <div>
          <Link to="/">Home</Link>
          <Link to="/">Minhas integrações</Link>
        </div>
      </Header>
      <TitleContainer>
        <h1> Integrações </h1>
        <h2> by LinkApi</h2>
        <Form>
          <FaSearch size={40} color="#e8b317" />
          <input
            placeholder="Procure por integrações"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </TitleContainer>
    </>
  );
};

export default Partners;
