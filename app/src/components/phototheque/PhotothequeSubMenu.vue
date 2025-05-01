<template>
  <div>
    <Accordeon title="Critère de mission" defaultOpen>
      <CritereSelection />
    </Accordeon>

    <Accordeon title="Mission" defaultOpen>
      <Mission />
    </Accordeon>

    <Accordeon title="Infos PVA" defaultOpen>
      <InfosPva />
    </Accordeon>
  </div>
</template>

<script setup>
import Accordeon from '@/components/material/Accordeon.vue'
import Mission from './Mission.vue'
import CritereSelection from '../cartotheque/CritereSelection.vue'
import InfosPva from './InfosPva.vue'
</script>
