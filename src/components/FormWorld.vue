<template>
  <form @submit.prevent="validate">
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model.lazy.trim="form.title"
      />
      <div class="form-text text-danger">
        {{ form.tilteerror }}
      </div>
    </div>
    <!-- <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div> -->
    <div class="mb-5">
      <label class="form-label">Body</label>
      <textarea class="form-control" rows="6" v-model.lazy.trim="form.body">
      </textarea>
      <div class="form-text text-danger">
        {{ form.bodeerror }}
      </div>
    </div>

    <!-- <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
    
    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm text-warning"
        role="status"
      ></div>
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },
    setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });

   function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body ;
      }
    }
    setInput();

    function validate() {
      if (form.title === "") {
        form.tilteerror = " title is required";
      } else {
        form.tilteerror = "";
      }

      if (form.body === "") {
        form.bodeerror = " body is required";
      } else {
        form.bodeerror = "";
      }
      if (form.title !== "" && form.body != "") {
        emit("formData", form);
      }
    }
    return { form, validate  };
  },
};
</script>

<style>
</style>