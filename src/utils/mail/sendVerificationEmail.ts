import AWS from "aws-sdk";
import SES from "@aws-sdk/client-ses";
import { User } from "../../models/user";
import { Err } from "../errors/Err";
import crypto from "crypto";

const baseUrl = "http://localhost:3000";

AWS.config.update({
  region: "us-west-1",
});

// const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
//   .sendEmail(params)
//   .promise();
//
const getEmailParams = (email: string, verificationLink: string) => {
  return {
    Destination: {
      /* required */
      CcAddresses: [],
      ToAddresses: [
        email,
        /* more items */
      ],
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: `
            <p>To verify your new aeon account, please use the following <a href="${verificationLink}">verification link</a></p>
          `,
        },
        Text: {
          Charset: "UTF-8",
          Data: "TEXT_FORMAT_BODY",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Verify your new aeon account",
      },
    },
    Source: "aeon@calebtheil.com" /* required */,
    ReplyToAddresses: [],
  };
};

const sendVerificationEmail = async (email: string) => {
  const user = await User.findByEmail(email);
  if (!user) {
    const error = new Err("No user found.");
    error.setStatus(404);
    return error;
  }
  return crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      const error = new Err("Error generating token");
      error.setStatus(500);
      return error;
    }
    const token = buffer.toString("hex");

    user.verificationToken = token;
    await user.save();
    const verificationLink = `${baseUrl}/v1/auth/verify/${token}`;
    return new AWS.SES()
      .sendEmail(getEmailParams(email, verificationLink))
      .promise()
      .then((_) => console.log("[verificationEmail]: verification email sent."))
      .catch((err) =>
        console.warn("[verificationEmail]: Error sending email: ", err),
      );
  });
};

export default sendVerificationEmail;
