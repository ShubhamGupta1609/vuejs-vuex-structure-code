<template>
    <div>
        <header>
            <!-- Your header content here -->
        </header>

        <main>
            <div class="login-container">
                Data From Store , UserName : {{ getUsersDetails.email }}
                <h1>Login</h1>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" v-model="password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </main>

        <footer>
            <!-- Your footer content here -->
        </footer>
    </div>
</template>

<script>
import store from '@/store'

export default {
    computed: {
        getUsersDetails() {
      return store.getters.getUserDetails
    },
  },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
           alert('Email: ' + this.email + ' Password: ' + this.password)
           store.dispatch('setUserDetails', { email: this.email, password: this.password })
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.form-group {
    margin-bottom: 10px;
}
label {
    display: block;
    font-weight: bold;
}
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
}
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>