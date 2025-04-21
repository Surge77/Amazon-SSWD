### 🧩 [Problem Title]

**Context:**  
Brief situation where the issue occurred.

**Challenge:**  
What was going wrong, what made it tricky?

**Insight:**  
What clicked or what helped you understand the problem better?

**Solution:**  
How you fixed it — clear, technical, and elegant.


>  Example : 

## 🛠️ Technical Challenges & Engineering Decisions

---

### 🧩 Webhook Verification Failing (Stripe Integration)

**Context:**  
While integrating Stripe for subscription payments, the webhook responses were inconsistent during local development.

**Challenge:**  
Stripe was sending webhook events, but my backend wasn't verifying the signatures correctly, causing silent failures. Localhost exposure added complexity.

**Insight:**  
Realized that the webhook secret was changing with each ngrok tunnel, and I wasn’t handling raw request bodies correctly.

**Solution:**  
Used Stripe CLI to create a persistent tunnel. Switched to `express.raw` middleware before body parsing to ensure signature integrity. Also externalized the secret to `.env` for easier environment handling.

---

### 🧩 MongoDB Timeout During Rapid API Testing

**Context:**  
During load testing with Postman, MongoDB connections were timing out intermittently.

**Challenge:**  
The error wasn't consistent, and I wasn’t sure if it was a code issue or infra bottleneck.

**Insight:**  
After logging connection attempts, I saw too many parallel connects due to no reuse in my DB layer.

**Solution:**  
Refactored the database utility to maintain a single connection instance using the Singleton pattern. Reduced cold start issues and stabilized the connection pool.

---

### 🧩 JWT Token Persistence Issue After Refresh

**Context:**  
Logged-in users were being logged out on page reload.

**Challenge:**  
Despite storing the token in localStorage, auth state was resetting.

**Insight:**  
The issue wasn’t token loss — it was that my frontend wasn’t rehydrating the user context from storage on boot.

**Solution:**  
Implemented a `useEffect` on app mount that checks for token presence and fetches user data to restore session. Also added automatic token refresh with Axios interceptors.
