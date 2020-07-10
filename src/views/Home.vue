<template>
    <div class="home">
        <flex-box justify="center" class="pt-5">
            <v-box class="mb-5">
                <country-flag class="mb-5" size="small" :src="require('@/assets/' + country.flag)"></country-flag>
                <country-stats :country="country"></country-stats>
            </v-box>
            <v-box class="ml-5">
                <ul>
                    <li v-for="(policy, key) in policies">
                        {{$t('policies.' + key)}}: {{policy}}% <button @click="selectedPolicy = key">Select</button>
                    </li>
                </ul>
                <div v-if="selectedPolicy">
                    <policy-slider :policy="selectedPolicy"></policy-slider>
                </div>
            </v-box>
        </flex-box>
    </div>
</template>

<script>
    import { Policies } from "../logic/policies";
    import {mapState} from "vuex"

    export default {
        name: 'Home',
        data() {
            return {
                selectedPolicy: null,
            }
        },
        filters: {
        },
        computed: {
            ...mapState(['stats', 'policies']),
            country() {
                return this.$game.country
            },
        }
    }
</script>
