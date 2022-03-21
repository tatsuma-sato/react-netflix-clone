import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs";

const FaqsContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequentry Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      
    </Accordion>
  );
};

export default FaqsContainer;
