<template>
    <div>
        <styled-table>
            <tr v-for="(value, label) in country.stats">
                <td>
                    {{$t(`stats.${label}`)}}
                </td>
                <td>
                    {{formatValue(value, label) }}
                </td>
            </tr>
        </styled-table>
    </div>
</template>

<script>
    import { Country } from "../logic/country";
    import { formatValue } from "../helpers";

    export default {
        name: "StatsDisplay",
        props: {
            country: {
                type: Country,
            }
        },
        methods: {
            formatValue(value, key) {
                return formatValue(value, key);
            }
        }
    }
</script>
