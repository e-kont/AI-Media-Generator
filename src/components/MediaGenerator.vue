<script setup>
  import { ref } from 'vue'

  const tab = ref(null)
  const tabs = ["image", "audio"]
  // import { generateMedia } from '@/services/api'

  const prompt = ref('')
  const loading = ref(false)

  const submit = async () => {
    loading.value = true

    /*await generateMedia({
      prompt: prompt.value,
      type: tab.value
    })

    loading.value = false*/
  }
</script>

<template>
  <v-container fluid class="p-6 my-10">
    <v-tabs
    v-model="tab"
    align-tabs="end"
    color="deep-purple-accent-2"
    >
      <v-tab v-for="t in tabs" :value="t">{{ t.charAt(0).toUpperCase() + t.slice(1) }} Generation</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab" class="pa-6">
      <v-tabs-window-item v-for="t in tabs" :value="t">
        <v-sheet class="bg-transparent">
          <v-textarea
          v-model="prompt"
          :label="'Describe your ' + t +'...'"
          variant="outlined"
          auto-grow
          />
          <v-file-input
          accept="image/*, audio/*"
          label="Upload image or audio file"
          variant="solo-filled"
          multiple
          />
          <v-btn
          :loading="loading"
          class="mt-10"
          size="large"
          color="blue-grey-darken-2"
          @click="submit"
          >
            Generate
          </v-btn>
        </v-sheet>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>
