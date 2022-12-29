import React from "react";
import { Icon } from "@iconify/react";

function EmailForm() {
  return (
    <form className="heroForm">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="formDiv">
        <input type="email" placeholder="Email address" />
        <button className="btn btn-primary">
          Get Started{" "}
          <Icon
            icon="material-symbols:keyboard-arrow-right"
            width="30"
            height="30"
          />
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
