import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import axios from "axios";
const generateEmbedToken = (rID, gID) => {
    var apiUrl = "https://api.powerbi.com/v1.0/myorg/groups/" + gID + "/reports/" + rID + "/GenerateToken"
    var bearerToken = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWU5YjE5MjMtOThlYS00ZjY2LTlkOTMtOGI5MDMyYWRjMjEzLyIsImlhdCI6MTYzOTQ3ODA0OSwibmJmIjoxNjM5NDc4MDQ5LCJleHAiOjE2Mzk0ODIzODYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFKQm9YRXpScEVOM2NYSUQ2UWVGT2R1anFGc3B6dE93b2dVOEVDMmg1YjNwb1g2dTNMQVRBR1FibjlMNWFYWjVXIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoicyIsImdpdmVuX25hbWUiOiJzYWxhaW11bmlzZWx2YW0iLCJpcGFkZHIiOiIxMTcuMjQxLjIxOS4xMzgiLCJuYW1lIjoic2FsYWltdW5pc2VsdmFtIHMiLCJvaWQiOiIzZmFjMzFlYi03Y2EyLTRjN2QtODc2OS1kNzExMWY2ZWZiNTQiLCJwdWlkIjoiMTAwMzIwMDFBNEE5N0NCRiIsInJoIjoiMC5BU29BSXhtYkh1cVlaay1kazR1UU1xM0NFdzhCSElkaFhyRlBnNnlZWVFwLWtSQXFBQVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoieFBZLWdNN0RnaWk0MXlKRXN5bE5wNmo2T2xSVkxCRnM5Y2NzcGU1aHk1ayIsInRpZCI6IjFlOWIxOTIzLTk4ZWEtNGY2Ni05ZDkzLThiOTAzMmFkYzIxMyIsInVuaXF1ZV9uYW1lIjoic2FsYWltdW5pc2VsdmFtc0BnZWFrbWluZHMuY29tIiwidXBuIjoic2FsYWltdW5pc2VsdmFtc0BnZWFrbWluZHMuY29tIiwidXRpIjoid21TMDR4THlXa2FIb0dFTE95M0dBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.SKiQNUu3s7erS2EPKnzKwjF0FuDbGXww8HGp7x8oHDlFeV2Qp8eW8Tpz6Q5joiTKXSPqHtM2g27pet312GvEncT5ruif_6PNYDYibhr3t_BdomO9kFrugrfb3bfDPhVp70RlvCLG1xxVGsI0hd-yBysuMZa4VQVy_Fvxit9cYdDU3if_MBxKfobJf_LhpzhNagwyVHol9ptZzEwVs8q-t8Lc4E8h1LZKstyXkJbF8SfIoIYXAVMe0PkJA3nCkPTR7hKYBxghvGCBEr9PROIUagsDLTHgHk8r3wcGZuhzwexudKgHCwp1507Bl5iJ4xqZzADR9V62F3vazJeWZAAB_g";
    return axios({
        type: "POST",
        url: apiUrl,
        headers: {
            "Content-Type": "application/json",
            // "Authorization": 'Bearer ${this.bearerToken}'
        },
        body: {
            "accessLevel": "View",
            "datasetId": '09b067a9-dd58-4870-9de4-6a9b1bbee2fc'
        },
        success: function (response) {
           console.log('Token accessed');
        },
        failure: function(xhr, status, error){
            console.log(error);
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function embedReportAndSetTokenListener(setAccessToken = false, 
    reportId, 
    groupId,
    embedUrl) {
    // Generate embed token
    generateEmbedToken(reportId, groupId)
    .then(function( Token ) {
        var embedToken = Token.token;
        
        // set config for embedding report
        var config = createConfig(embedToken,embedUrl,reportId);
        
        // Get a reference to the embedded report HTML element
        var embedContainer = $('report-style-class');
        
        // Embed the report and display it within the div container.
        var report = powerbi.embed(embedContainer, config);
        
        // Report.off removes a given event handler if it exists.        
        report.off("loaded");

        // Report.on will add an event handler which prints to Log window.
        report.on("loaded", function() {
        // Set token expiration listener
        setTokenExpirationListener(Token.expiration,
        2 /*minutes before expiration*/, 
        reportId, 
        groupId);
        });
    });
}

function setTokenExpirationListener(tokenExpiration, 
    minutesToRefresh = 2, 
    reportId, 
    groupId){
    // get current time
    var currentTime = Date.now();
    var expiration = Date.parse(tokenExpiration);
    var safetyInterval = minutesToRefresh* 60 * 1000;

    // time until token refresh in milliseconds
    var timeout = expiration - currentTime - safetyInterval;

    // if token already expired, generate new token and set the access token
    if (timeout<=0)
    {
        console.log("Updating Report Embed Token");
        updateToken(reportId, groupId);
    }
    // set timeout so minutesToRefresh minutes before token expires, token will be updated
    else 
    {
        console.log("Report Embed Token will be updated in " + timeout + " milliseconds.");
        setTimeout(function() {
        updateToken(reportId, groupId);
        }, timeout);
    }
}

const updateToken = (reportId, groupId) => {
    // Generate new EmbedToken
    generateEmbedToken(reportId, groupId)
    .then(function( Token ) {
        // Get a reference to the embedded report HTML element
        var embedContainer = $('report-style-class');

        // Get a reference to the embedded report.
        var report = powerbi.get(embedContainer);

        // Set AccessToken
        report.setAccessToken(Token.token)
        .then(function() {
        // Set token expiration listener
        // result.expiration is in ISO format
        // setTokenExpirationListener(Token.expiration,2 /*minutes before expiration*/);
        });
    });
}

const PowerBi = () => {
  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "f1d7775f-6ad2-4df2-aa84-f946db9bfa5b",
        //   embedUrl:
        //     "https://app.powerbi.com/reportEmbed?reportId=f1d7775f-6ad2-4df2-aa84-f946db9bfa5b&groupId=6d1e625f-3017-4b96-ae2e-f2a6f4831a0f&",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWU5YjE5MjMtOThlYS00ZjY2LTlkOTMtOGI5MDMyYWRjMjEzLyIsImlhdCI6MTYzOTEzMjYyMiwibmJmIjoxNjM5MTMyNjIyLCJleHAiOjE2MzkxMzgxODUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUErNEc4cklTNnVEWm9FM21saVR1MFlnWmlVSTU0WXVvTnpVOEdvZmJwSk4zcjZLNS9ySjFrMlBlSGc3Q05BMmRTIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoicyIsImdpdmVuX25hbWUiOiJzYWxhaW11bmlzZWx2YW0iLCJpcGFkZHIiOiIxMzYuMTg1LjEuMTA4IiwibmFtZSI6InNhbGFpbXVuaXNlbHZhbSBzIiwib2lkIjoiM2ZhYzMxZWItN2NhMi00YzdkLTg3NjktZDcxMTFmNmVmYjU0IiwicHVpZCI6IjEwMDMyMDAxQTRBOTdDQkYiLCJyaCI6IjAuQVNvQUl4bWJIdXFZWmstZGs0dVFNcTNDRXc4QkhJZGhYckZQZzZ5WVlRcC1rUkFxQUFVLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6InhQWS1nTTdEZ2lpNDF5SkVzeWxOcDZqNk9sUlZMQkZzOWNjc3BlNWh5NWsiLCJ0aWQiOiIxZTliMTkyMy05OGVhLTRmNjYtOWQ5My04YjkwMzJhZGMyMTMiLCJ1bmlxdWVfbmFtZSI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInVwbiI6InNhbGFpbXVuaXNlbHZhbXNAZ2Vha21pbmRzLmNvbSIsInV0aSI6IkFqcnhoTGF3S1VXWWZ3R2RKUzFWQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.E7DsvbEnxwcP7JafItn3oT_c5OkE3WYDQyjfkRjSq5ISqC3gSWtNFE37mU6UJ7xDL0M_X048lRjDYiYGG4si-2veifQCCF2sMw8b7jq5hWtFKtxE-qE-LmwfJ1hAo12Otpdd_oGEX40glo_c6sBdvsrW3CmfNDAVA6iQVvSRT84GAGsWJ5PS0tRhpoWkDqf6adcytM5SyQA8lpg2VU4YDb1PiTIJIIBtlkUDEweDEgtN1IqMk_51re2aiNP1YVeMBEhmL9yBk62Jn97WL6ed-qEVGR8L1i2WWCUKIsUKEbMjM0Fiq62I1ID7QpyuHgv4MaM_tGVynqYwukuKDdJXYg",
          tokenType: models.TokenType.Aad,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
                embedReportAndSetTokenListener('f1d7775f-6ad2-4df2-aa84-f946db9bfa5b',
                        '6d1e625f-3017-4b96-ae2e-f2a6f4831a0f&',
                        'https://app.powerbi.com/reportEmbed?reportId=f1d7775f-6ad2-4df2-aa84-f946db9bfa5b&groupId=6d1e625f-3017-4b96-ae2e-f2a6f4831a0f&')
              },
            ],
          ])
        }
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
};

export default PowerBi;