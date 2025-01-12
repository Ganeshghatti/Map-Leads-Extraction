const outreachTemplate = (name, optionalBody) => {
  return `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Email Template</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <!--[if mso
      ]><xml>
        <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
          <w:DontUseAdvancedTypographyReadingMail />
        </w:WordDocument> </xml
    ><![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors],
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      @media only screen and (max-width: 600px) {
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-p-default {
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 36px !important;
          text-align: left;
        }
        h2 {
          font-size: 28px !important;
          text-align: center;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 36px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 28px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
          display: block;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          padding: 10px 20px 10px 20px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .h-auto {
          height: auto !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body
    class="body"
    style="
      width: 100%;
      height: 100%;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #f0f2f4"
    >
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f0f2f4"></v:fill>
        </v:background>
      <![endif]-->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        class="es-wrapper"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #f0f2f4;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #e9e2df;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 30px;
                          padding-bottom: 40px;
                          padding-left: 30px;
                        "
                      >
                        <!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:300px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              class="es-m-p20b"
                              style="padding: 0; margin: 0; width: 300px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h1
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        font-family: 'playfair display', georgia,
                                          'times new roman', serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 54px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 64.8px;
                                        color: #123850;
                                      "
                                    >
                                      I only need<br /><em>10 minutes!</em>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:220px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          class="es-right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 220px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-txt-l"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://thesquirrel.site"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2e4b62;
                                        font-size: 18px;
                                      "
                                      ><img
                                        src="https://erqsebq.stripocdn.email/content/guids/CABINET_dabb4cb2106cb6304cdb88da08735e91647aa0e80b982472d5ff932e13a957c3/images/logo_icon__2_removebgpreview.png"
                                        alt="The Squirrel Logo"
                                        width="125"
                                        title="The Squirrel Logo"
                                        class="adapt-img"
                                        style="
                                          display: block;
                                          font-size: 18px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#fef7f2"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #fef7f2;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 40px;
                          padding-right: 30px;
                          padding-left: 30px;
                          padding-bottom: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 540px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h2
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        font-family: 'playfair display', georgia,
                                          'times new roman', serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 36px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 43.2px;
                                        color: #123850;
                                      "
                                    >
                                      Hi ${name},
                                    </h2>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        line-height: 27px;
                                        letter-spacing: 0;
                                        color: #2e4b62;
                                        font-size: 18px;
                                      "
                                    >
                                      <br />My name is Aditya Vaish, and I'm the
                                      Co-Founder at The Squirrel. I'll keep this
                                      quick as I understand you might be
                                      busy.<br /><br />Our company specializes
                                      in
                                      <strong>Website and AI Solutions</strong>
                                      for businesses and has over
                                      <strong>70+</strong> international clients
                                      to date.<br /><br />Startups giants in
                                      various ecosystem have been using our
                                      services for years now.<br /><br />
                                      ${
                                        optionalBody
                                          ? `<div>${optionalBody} <br /><br /></div>`
                                          : ""
                                      }
                                      Partnering
                                      with The Squirrel, we can guarantee three
                                      things:
                                    </p>
                                    <ol
                                      style="
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        padding: 0px 0px 0px 40px;
                                        margin-top: 15px;
                                        margin-bottom: 15px;
                                      "
                                    >
                                      <li
                                        style="
                                          color: #2e4b62;
                                          margin: 0px 0px 15px;
                                          font-size: 18px;
                                        "
                                      >
                                        <p
                                          class="es-m-txt-l"
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            mso-margin-bottom-alt: 15px;
                                            font-family: lato, 'helvetica neue',
                                              helvetica, arial, sans-serif;
                                            line-height: 27px;
                                            letter-spacing: 0;
                                            color: #2e4b62;
                                            font-size: 18px;
                                            mso-margin-top-alt: 15px;
                                          "
                                        >
                                          Optimized Website copies for Higher
                                          Ranking and SEO&nbsp;
                                        </p>
                                      </li>
                                      <li
                                        style="
                                          color: #2e4b62;
                                          margin: 0px 0px 15px;
                                          font-size: 18px;
                                        "
                                      >
                                        <p
                                          class="es-m-txt-l"
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            mso-margin-bottom-alt: 15px;
                                            font-family: lato, 'helvetica neue',
                                              helvetica, arial, sans-serif;
                                            line-height: 27px;
                                            letter-spacing: 0;
                                            color: #2e4b62;
                                            font-size: 18px;
                                          "
                                        >
                                          Increased Leads
                                        </p>
                                      </li>
                                      <li
                                        style="
                                          color: #2e4b62;
                                          margin: 0px 0px 15px;
                                          font-size: 18px;
                                        "
                                      >
                                        <p
                                          class="es-m-txt-l"
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            mso-margin-bottom-alt: 15px;
                                            font-family: lato, 'helvetica neue',
                                              helvetica, arial, sans-serif;
                                            line-height: 27px;
                                            letter-spacing: 0;
                                            color: #2e4b62;
                                            font-size: 18px;
                                          "
                                        >
                                          Websites that resonates with your
                                          Business
                                        </p>
                                      </li>
                                    </ol>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        line-height: 27px;
                                        letter-spacing: 0;
                                        color: #2e4b62;
                                        font-size: 18px;
                                      "
                                    >
                                      <br />I only need 10 minutes of your time
                                      to explain all of this to you.<br /><br /><strong
                                        >Let me know if you are
                                        interested.</strong
                                      ><br /><br />Best,<br />Aditya Vaish<br />Co-Founder
                                      | The Squirrel
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        line-height: 27px;
                                        letter-spacing: 0;
                                        color: #2e4b62;
                                        font-size: 18px;
                                      "
                                    >
                                      63864-95184
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 30px;
                          padding-left: 30px;
                          padding-bottom: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 540px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://thesquirrel.site"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #2e4b62;
                                        font-size: 18px;
                                      "
                                      ><img
                                        src="https://erqsebq.stripocdn.email/content/guids/CABINET_dabb4cb2106cb6304cdb88da08735e91647aa0e80b982472d5ff932e13a957c3/images/squirrel_linkedin_banner.png"
                                        alt=""
                                        width="540"
                                        class="adapt-img"
                                        style="
                                          display: block;
                                          font-size: 18px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-right: 30px;
                          padding-bottom: 40px;
                          padding-left: 30px;
                          padding-top: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 540px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <!--[if mso
                                      ]><a
                                        href="https://thesquirrel.site"
                                        target="_blank"
                                        hidden
                                      >
                                        <v:roundrect
                                          xmlns:v="urn:schemas-microsoft-com:vml"
                                          xmlns:w="urn:schemas-microsoft-com:office:word"
                                          esdevVmlButton
                                          href="https://thesquirrel.site"
                                          style="
                                            height: 54px;
                                            v-text-anchor: middle;
                                            width: 136px;
                                          "
                                          arcsize="0%"
                                          stroke="f"
                                          fillcolor="#123850"
                                        >
                                          <w:anchorlock></w:anchorlock>
                                          <center
                                            style="
                                              color: #ffffff;
                                              font-family: lato,
                                                'helvetica neue', helvetica,
                                                arial, sans-serif;
                                              font-size: 20px;
                                              font-weight: 700;
                                              line-height: 20px;
                                              mso-text-raise: 1px;
                                            "
                                          >
                                            Contact us
                                          </center>
                                        </v:roundrect></a
                                      > <!
                                    [endif]--><!--[if !mso]><!-- --><span
                                      class="es-button-border msohide"
                                      style="
                                        border-style: solid;
                                        border-color: #2cb543;
                                        background: #123850;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 0px;
                                        width: auto;
                                        mso-hide: all;
                                      "
                                      ><a
                                        href="https://thesquirrel.site"
                                        target="_blank"
                                        class="es-button"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 20px;
                                          padding: 15px 20px 15px 20px;
                                          display: inline-block;
                                          background: #123850;
                                          border-radius: 0px;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 24px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #123850;
                                        "
                                        >Contact us</a
                                      ></span
                                    ><!--<![endif]-->
                                    <span
                                      class="es-button-border msohide"
                                      style="
                                        border-style: solid;
                                        border-color: #123850;
                                        background: #ffffff;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 0px;
                                        width: auto;
                                        mso-hide: all;
                                        margin-left: 10px; /* Add margin for spacing */
                                      "
                                      ><a
                                        href="https://calendly.com/thesquirrel/discovery-call"
                                        target="_blank"
                                        class="es-button"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #123850;
                                          font-size: 20px;
                                          padding: 15px 20px 15px 20px;
                                          display: inline-block;
                                          background: #ffffff;
                                          border-radius: 0px;
                                          font-family: lato, 'helvetica neue',
                                            helvetica, arial, sans-serif;
                                          font-weight: bold;
                                          font-style: normal;
                                          line-height: 24px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #123850;
                                        "
                                        >Book a meeting</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-footer"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-footer-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-right: 30px;
                          padding-left: 30px;
                          padding-bottom: 20px;
                          padding-top: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 540px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h1
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: 'playfair display', georgia,
                                          'times new roman', serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 54px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 64.8px;
                                        color: #123850;
                                      "
                                    >
                                      We're all in one Agency
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #123850;
                                        font-size: 14px;
                                      "
                                    >
                                      Creating Intelligent Digital Experience
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-footer"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-footer-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-bottom: 20px;
                          padding-top: 20px;
                          padding-right: 20px;
                          padding-left: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #123850;
                                        font-size: 14px;
                                      "
                                    >
                                      Bengaluru, Karnataka
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: lato, 'helvetica neue',
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #123850;
                                        font-size: 14px;
                                      "
                                    >
                                      © 2025
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;
};
module.exports = outreachTemplate;
