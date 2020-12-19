<template>
    <div>
        <v-card>
            <v-card-title>
                Users
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="rows"
                    :search="search"
            >
                <template v-slot:items="props">
                    <td><h3>{{ props.item.no }}</h3></td>
                    <td class="text-xs-right">{{ props.item.sender }}</td>
                    <td class="text-xs-right">{{ props.item.receiver }}</td>
                    <td class="text-xs-right">{{ props.item.status }}</td>
                    <td class="text-xs-right">{{ props.item.price }}</td>
                    <td class="justify-center layout px-0">
                        <b-icon icon="trash" variant="secondary" class="mt-2" @click="viewDetail(item._id)"></b-icon>
                    </td>
                </template>
                <template v-slot:no-results>
                    <v-alert :value="true" color="error" icon="warning">
                        Your search for "{{ search }}" found no results.
                    </v-alert>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';
import {API_URL} from '../../common/config';
import {BIcon} from 'bootstrap-vue';
import datetime from 'node-datetime';
const url = API_URL + '/api/v1/users';
const token = localStorage.getItem('authUser');
export default {
  name: "dashboard",
  components: {
      BIcon
  },
    data () {
        return {
            search: '',
            headers: [
                {text: 'No', align: 'left', sortable: false, value: 'no'},
                { text: 'Name', value: 'name' },
                { text: 'Email', value: 'email' },
                {text: 'Date', value: 'date'}
            ],
            rows: [],
            keyIndex: 0,
        }
    },
    created () {
      axios.get(url, {headers: {
              'Authorization': token
          }
      }).then(res => {
          console.log(res['data']);
          let rows = [];
          for (let item of res['data']) {
            var updatedAt = datetime.create(item.updatedAt);
              const row =  {
                  no: this.keyIndex + 1,
                  name: item.firstName + ' ' + item.lastName,
                  email: item.email,
                  date: updatedAt.format('n D, Y')
              };
              rows.push(row);
              this.keyIndex++;
          }
          this.rows = rows;
          this.keyIndex = this.rows.length;
      })
    },
    methods : {
        viewDetail (item) {
            console.log(item)
            this.dialog = true
        },
    }
};
</script>
<style>

</style>
