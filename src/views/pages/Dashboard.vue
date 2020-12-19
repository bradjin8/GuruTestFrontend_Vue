<template>
    <div>
        <v-card>
            <v-card-title>
                Customer's Order
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
const url = API_URL + '/v1/api/admin/list/';
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
                { text: 'Sender', value: 'sender' },
                { text: 'Receiver', value: 'receiver' },
                {text: 'Type', value: 'type'},
                {text: 'Purpose', value: 'purpose'},
                {text: 'Service', value: 'service'},
                { text: 'Quantity', value: 'quantity' },
                { text: 'Volume', value: 'volume' },
                {text: 'Weight', value: 'weight'},
                {text: 'Price', value: 'price'}
            ],
            rows: [],
            keyIndex: 0,
        }
    },
    created () {
      axios.get(url + 'getList', {headers: {
              'Authorization': token
          }
      }).then(res => {
          console.log(res['data']);
          let rows = [];
          for (let item of res['data']) {
              const row =  {
                  no: this.keyIndex + 1,
                  sender: item.sender.country,
                  receiver: item.receiver.country,
                  type : item.data.type,
                  purpose: item.data.purpose,
                  service: item.data.service,
                  quantity: item.data.items,
                  volume: item.data.volume + '(m3)',
                  weight: item.data.weights + '(kg)',
                  price: "Rp " + item.data.price
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
