<?php

/**
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

use Discuz\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateNotifications extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->schema()->create('notifications', function (Blueprint $table) {
            $table->id()->comment('通知 id');
            $table->string('type')->comment('通知类型');
            $table->morphs('notifiable');
            $table->text('data')->comment('通知内容');
            $table->dateTime('read_at')->nullable()->comment('通知阅读时间');
            $table->dateTime('created_at')->comment('创建时间');
            $table->dateTime('updated_at')->comment('更新时间');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->schema()->dropIfExists('notifications');
    }
}
