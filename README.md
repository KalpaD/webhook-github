
## 1. Expose our local development environment to the internet so GitHub can

```
ngrok http 4567
```

## 2. Set up the webhook URL with the output
```
https://<NGROCK_VALUE>.au.ngrok.io -> http://localhost:4567
```

## 3. Configure the secret for the signature with high entropy key


## 4. Select the events you need for the subscription

## 5. Configure the app to verify the signature using HMAC


## Considerations

- Since this is public URL signature verifications is a must , too many violations of the signature verification must be monitored.
- Since this is public URL too many invocations also should be monitored and must build protection mechanisms against it.
