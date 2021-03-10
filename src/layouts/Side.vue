<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async fetch_() {
      try {
        const res = await HTTP.get(`${this.url}/__`);
        res.data;
      } catch (error) {}
    },
    async view_() {
      try {
        const res = await HTTP.get(`${this.url}/__`);
        res.data;
      } catch (error) {}
    },
    async insert_() {
      try {
        const res = await HTTP.get(`${this.url}/__`);
        res.data;
      } catch (error) {}
    },
    async edit_() {
      try {
        const res = await HTTP.get(`${this.url}/__`);
        res.data;
      } catch (error) {}
    },
    async update_() {
      try {
        const res = await HTTP.get(`${this.url}/__`);
        res.data;
      } catch (error) {}
    },
    async delete_() {
      try {
        const res = await HTTP.get(`${this.url}/__`);
        res.data;
      } catch (error) {}
    },
  },
};
</script>

<style>
</style>