<template>
    <div>
        <p>
            Modyfikacja ustawy o {{ policyObject.longName }}
        </p>
        <p>
            Stara wartość: {{ policyState  }}
        </p>
        <p>
            Nowa wartość: {{ policyValue  }}
        </p>
        <vue-slider :min="policyObject.min" :max="policyObject.max" v-model="policyValue"/>
        <button @click="updatePolicy">
            Update
        </button>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import {Policies} from "../logic/policies"

    export default {
        props: {
            policy: {},
        },
        data() {
            return {
                policyValue: 0,
            }
        },
        watch: {
            policy:{
                handler(policyName){
                    if(typeof policyName == "string") {
                        this.policyValue = this.policies[policyName];
                    }
                },
                immediate: true,
            }
        },
        methods: {
            async updatePolicy() {
                console.log(this.policyValue);
                await this.$store.dispatch('updatePolicy', {
                    policy: this.policy,
                    newValue: this.policyValue,
                    oldValue: this.policyState,
                })
            }
        },
        computed: {
            ...mapState(['policies']),
            policyState(){
                return this.policies[this.policy]
            },
            policyObject() {
                return Policies[this.policy];
            }
        }
    }
</script>
