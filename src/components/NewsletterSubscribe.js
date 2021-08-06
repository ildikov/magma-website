import React from "react";
import content from "../content/subscribe.json";
import leftArrow from "../img/svg/arrow-left.svg";

const NewsletterSubscribe = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (content.subscribe.display) {
      return (
        <React.Fragment>
          <section className="section search-content no-border">
            <div className="search-content">
              <h2>{content.subscribe.title}</h2>
              <p>{content.subscribe.subTitle}</p>
            </div>
            <div className="field has-addons-centered">
              <form
                method="post"
                id="e2ma_signup"
                onSubmit="return signupFormObj.checkForm(this)"
                action={content.subscribe.signupLink}
              >
                <input
                  id="id_prev_member_email"
                  name="prev_member_email"
                  type="hidden"
                />
                <input id="id_source" name="source" type="hidden" />
                <input
                  id="id_group_4036448"
                  name="group_4036448"
                  type="hidden"
                  value="4036448"
                />
                <input type="hidden" name="private_set" value="{num_private}" />
                <input
                  aria-label="Email Address"
                  placeholder="Email Address"
                  id="id_email"
                  name="email"
                  type="email"
                  required="required"
                  size="is-large"
                  className="search-container-input"
                />
                <button
                  onClick="document.getElementById('e2ma_signup').submit();"
                  className="button is-primary border-search-submit"
                >
                  <span>SUBMIT</span>
                </button>
              </form>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
};

export default NewsletterSubscribe;
